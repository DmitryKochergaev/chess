import { canSuggestThisMoveForLinearPiece, ICell, IPiece } from "./table.model";

export const getSuggestionForStraightMoveIds = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece,isSingleDepthIteration: boolean = false) => {
  const suggestionMoveIdsForRook: string[] = [];
  const [horizontalIndex, verticalIndex] = moveFrom.split('').map(el => +el);

  let leftIndex = horizontalIndex - 1;
  let shouldCheckLeft = true;

  let rightIndex = horizontalIndex + 1;
  let shouldCheckRight = true;

  let topIndex = verticalIndex + 1;
  let shouldCheckTop = true;

  let bottomIndex = verticalIndex - 1;
  let shouldCheckBottom = true;

  let tempResultForCell: { canMove: boolean, isLastMove: boolean };

  for (let i = 0; i < cells.length; i++) {
    if (shouldCheckLeft) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, leftIndex, verticalIndex);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForRook.push(cells[leftIndex][verticalIndex].id);
      }

      shouldCheckLeft = !tempResultForCell.isLastMove;
    }

    if (shouldCheckRight) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, rightIndex, verticalIndex);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForRook.push(cells[rightIndex][verticalIndex].id);
      }

      shouldCheckRight = !tempResultForCell.isLastMove;
    }

    if (shouldCheckTop) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, horizontalIndex, topIndex);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForRook.push(cells[horizontalIndex][topIndex].id);
      }

      shouldCheckTop = !tempResultForCell.isLastMove;
    }

    if (shouldCheckBottom) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, horizontalIndex, bottomIndex);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForRook.push(cells[horizontalIndex][bottomIndex].id);
      }

      shouldCheckBottom = !tempResultForCell.isLastMove;
    }


    if (!shouldCheckLeft && !shouldCheckRight && !shouldCheckTop && !shouldCheckBottom || isSingleDepthIteration) {
      break;
    }

    leftIndex--;
    rightIndex++;

    topIndex++;
    bottomIndex--;
  }

  return suggestionMoveIdsForRook;
};
