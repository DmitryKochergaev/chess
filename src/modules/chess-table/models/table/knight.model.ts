import { canSuggestThisMoveForPiece, ICell, IPiece } from "./table.model";

export const getSuggestionMoveIdsForKnight = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece) => {
  const suggestionMoveIdsForKnight: string[] = [];
  const [horizontalIndex, verticalIndex] = moveFrom.split('').map(el => +el);

  for (let index = 0; index < knightMoves.length; index++) {
    const { i, j } = knightMoves[index];
    if (canSuggestThisMoveForPiece(cells, pieceToMove, horizontalIndex + i, verticalIndex + j).canMove) {
      suggestionMoveIdsForKnight.push(cells[horizontalIndex + i][verticalIndex + j].id);
    }
  }

  return suggestionMoveIdsForKnight;
};

const knightMoves = [
  {
    i: -1,
    j: -2,
  },
  {
    i: -2,
    j: -1,
  },
  {
    i: -2,
    j: +1,
  },
  {
    i: -1,
    j: +2,
  },
  {
    i: +1,
    j: +2,
  },
  {
    i: +2,
    j: +1,
  },
  {
    i: +2,
    j: -1,
  },
  {
    i: +1,
    j: -2,
  },
];

