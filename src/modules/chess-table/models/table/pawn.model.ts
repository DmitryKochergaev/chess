import { ICell, IPiece } from "./table.model";

export const getSuggestionMoveIdsForPawn = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece) => {
  const suggestionMoveIdsForPawn: string[] = [];
  const [horizontalIndex, verticalIndex] = moveFrom.split('').map(el => +el);
  let i;
  let iLimit;

  // white and black pawns have unique move rules,
  // so first we need to understand what color the pawn is and,
  // depending on this, subtract or add the initial i and iLimit index.
  if (pieceToMove.color === 'black') {
    i = horizontalIndex - 2;
    iLimit = horizontalIndex;
    if (pieceToMove.hasMoved) {
      i++;
    }
  } else {
    i = horizontalIndex + 1;
    iLimit = horizontalIndex + 3;
    if (pieceToMove.hasMoved) {
      iLimit--;
    }
  }

  // for optimization, we do not go through all the cells,
  // but only through the nearest 2 horizontals and 3 verticals
  for (i; i < iLimit; i++) {
    for (let j = verticalIndex - 1; j < verticalIndex + 2; j++) {
      if (canSuggestThisMoveForPawn(cells, pieceToMove, i, j, horizontalIndex, verticalIndex)) {
        suggestionMoveIdsForPawn.push(cells[i][j].id);
      }
    }
  }

  return suggestionMoveIdsForPawn;
};

const canSuggestThisMoveForPawn = (cells: ICell[][], pieceToMove: IPiece, i, j, horizontalIndex, verticalIndex) => {
  // check if cell[i][j] is existing
  if (!cells[i] || !cells[i][j]) {
    return false;
  }

  // pawn can't move to an ally's cell
  if (cells[i][j]?.piece?.color === pieceToMove.color) {
    return false;
  }

  // again, the pawn has unique movement rules for white and black,
  // so depending on it, we will check the cells above or below the pawn
  if (pieceToMove.color === 'black') {
    if (horizontalIndex - 2 === i) {
      return verticalIndex === j && !cells[i][j].piece && !cells[i + 1][j].piece;
    }

    return verticalIndex !== j ? cells[i][j].piece : !cells[i][j].piece;
  } else {
    if (horizontalIndex + 1 === i) {
      return verticalIndex !== j ? cells[i][j].piece : !cells[i][j].piece;
    }
    return verticalIndex === j && !cells[i][j].piece && !cells[i - 1][j].piece;
  }

};
