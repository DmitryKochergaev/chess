export type Colors = 'black' | 'white';
export type Pieces = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';

export interface IPiece {
  id: string;
  type: Pieces;
  color: Colors;
  image: string;
  position?: {
    top: string,
    left: string,
  },
  hasMoved?: boolean;
}

export interface ICell {
  id: string;
  piece: IPiece | null,
  color: Colors;
  displayedInfo?: {
    left?: string;
    bottom?: string;
  }
  selected?: boolean;
  canMove?: boolean;
}


export const getSuggestionMoveIds = (moveFrom: string, cells: ICell[][]) => {
  // moveFrom is two-digit number, where 1 digit is a horizontal index, and the second is a vertical index
  let suggestionMoveIds: string[] = []
  const pieceToMove = cells.flat().find(el => el.id === moveFrom)?.piece

  switch (pieceToMove?.type) {
    case "pawn": {
      suggestionMoveIds = getSuggestionMoveIdsForPawn(moveFrom, cells, pieceToMove);
      break;
    }
    case "knight": {
      break
    }
    case "bishop": {
      break
    }
    case "rook": {
      break
    }
    case "queen": {
      break
    }
    case "king": {
      break
    }
    default: {
      break;
    }
  }

  return suggestionMoveIds;
}

const getSuggestionMoveIdsForPawn = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece) => {
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
        suggestionMoveIdsForPawn.push(cells[i][j].id)
      }
    }
  }

  return suggestionMoveIdsForPawn;
}

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
      return verticalIndex === j && !cells[i + 1][j].piece
    }

    return verticalIndex !== j ? cells[i][j].piece : !cells[i][j].piece;
  } else {
    if (horizontalIndex + 1 === i) {
      return verticalIndex !== j ? cells[i][j].piece : !cells[i][j].piece;
    }
    return verticalIndex === j && !cells[i - 1][j].piece
  }

}
