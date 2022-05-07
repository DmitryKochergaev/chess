import {
  getCellsCopyWithMovedPiece,
  getCellsUnderAttackByColor,
  ICell,
  IPiece
} from "./table.model";
import { getSuggestionForDiagonallyMoveIds } from "./bishop.model";
import { getSuggestionForStraightMoveIds } from "./rook.model";

export const getSuggestionMoveIdsForKing = (moveFrom: string, cells: ICell[][], pieceToMove: IPiece, isEnemiesKingMove = false) => {
  return getSuggestionForDiagonallyMoveIds(moveFrom, cells, pieceToMove, true).concat(
      getSuggestionForStraightMoveIds(moveFrom, cells, pieceToMove, true))
    .filter(moveTo => {
      return isEnemiesKingMove
        ? true
        : !getCellsUnderAttackByColor(getCellsCopyWithMovedPiece(cells, moveFrom, moveTo), pieceToMove.color).includes(moveTo);
    });
};
