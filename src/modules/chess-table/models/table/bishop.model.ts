import { canSuggestThisMoveForLinearPiece, ICell, IPiece } from "./table.model";

export const getSuggestionMoveIdsForBishop = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece) => {
  const suggestionMoveIdsForBishop: string[] = [];
  const [horizontalIndex, verticalIndex] = moveFrom.split('').map(el => +el);

  let topLeftI = horizontalIndex + 1;
  let topLeftJ = verticalIndex - 1;
  let shouldCheckTopLeft = true;

  let topRightI = horizontalIndex + 1;
  let topRightJ = verticalIndex + 1;
  let shouldCheckTopRightJ = true;

  let bottomRightI = horizontalIndex - 1;
  let bottomRightJ = verticalIndex + 1;
  let shouldCheckBottomRight = true;

  let bottomLeftI = horizontalIndex - 1;
  let bottomLeftJ = verticalIndex - 1;
  let shouldCheckBottomLeft = true;

  let tempResultForCell: { canMove: boolean, isLastMove: boolean };

  for (let i = 0; i < cells.length; i++) {
    if (shouldCheckTopLeft) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, topLeftI, topLeftJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[topLeftI][topLeftJ].id);
      }

      shouldCheckTopLeft = !tempResultForCell.isLastMove;
    }

    if (shouldCheckTopRightJ) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, topRightI, topRightJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[topRightI][topRightJ].id);
      }

      shouldCheckTopRightJ = !tempResultForCell.isLastMove;
    }

    if (shouldCheckBottomRight) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, bottomRightI, bottomRightJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[bottomRightI][bottomRightJ].id);
      }

      shouldCheckBottomRight = !tempResultForCell.isLastMove;
    }

    if (shouldCheckBottomLeft) {
      tempResultForCell = canSuggestThisMoveForLinearPiece(cells, pieceToMove, bottomLeftI, bottomLeftJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[bottomLeftI][bottomLeftJ].id);
      }

      shouldCheckBottomLeft = !tempResultForCell.isLastMove;
    }

    if (!shouldCheckTopLeft && !shouldCheckTopRightJ && !shouldCheckBottomRight && !shouldCheckBottomLeft) {
      break;
    }

    topLeftI++;
    topLeftJ--;

    topRightI++;
    topRightJ++;

    bottomRightI--;
    bottomRightJ++;

    bottomLeftI--;
    bottomLeftJ--;
  }

  return suggestionMoveIdsForBishop;
};
