import { canSuggestThisMoveForPiece, ICell, IPiece } from "./table.model";

export const getSuggestionForDiagonallyMoveIds = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece, isSingleDepthIteration: boolean = false) => {
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
      tempResultForCell = canSuggestThisMoveForPiece(cells, pieceToMove, topLeftI, topLeftJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[topLeftI][topLeftJ].id);
      }

      shouldCheckTopLeft = !tempResultForCell.isLastMove;
    }

    if (shouldCheckTopRightJ) {
      tempResultForCell = canSuggestThisMoveForPiece(cells, pieceToMove, topRightI, topRightJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[topRightI][topRightJ].id);
      }

      shouldCheckTopRightJ = !tempResultForCell.isLastMove;
    }

    if (shouldCheckBottomRight) {
      tempResultForCell = canSuggestThisMoveForPiece(cells, pieceToMove, bottomRightI, bottomRightJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[bottomRightI][bottomRightJ].id);
      }

      shouldCheckBottomRight = !tempResultForCell.isLastMove;
    }

    if (shouldCheckBottomLeft) {
      tempResultForCell = canSuggestThisMoveForPiece(cells, pieceToMove, bottomLeftI, bottomLeftJ);

      if (tempResultForCell.canMove) {
        suggestionMoveIdsForBishop.push(cells[bottomLeftI][bottomLeftJ].id);
      }

      shouldCheckBottomLeft = !tempResultForCell.isLastMove;
    }

    if (!shouldCheckTopLeft && !shouldCheckTopRightJ && !shouldCheckBottomRight && !shouldCheckBottomLeft || isSingleDepthIteration) {
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
