import { getSuggestionForDiagonallyMoveIds } from "./bishop.model";
import { getSuggestionMoveIdsForPawn } from "./pawn.model";
import { getSuggestionForStraightMoveIds } from "./rook.model";
import { getSuggestionMoveIdsForKing } from "./king.model";
import copy from "fast-copy";

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


export const getSuggestionMoveIds = (moveFrom: string, cells: ICell[][], isEnemiesKingMove = false) => {
  // moveFrom is two-digit number, where 1 digit is a horizontal index, and the second is a vertical index
  let suggestionMoveIds: string[] = [];
  const pieceToMove = cells.flat().find(el => el.id === moveFrom)?.piece;

  switch (pieceToMove?.type) {
    case "pawn": {
      suggestionMoveIds = getSuggestionMoveIdsForPawn(moveFrom, cells, pieceToMove);
      break;
    }
    case "knight": {
      break;
    }
    case "bishop": {
      suggestionMoveIds = getSuggestionForDiagonallyMoveIds(moveFrom, cells, pieceToMove);
      break;
    }
    case "rook": {
      suggestionMoveIds = getSuggestionForStraightMoveIds(moveFrom, cells, pieceToMove);
      break;
    }
    case "queen": {
      suggestionMoveIds = getSuggestionForDiagonallyMoveIds(moveFrom, cells, pieceToMove).concat(
        getSuggestionForStraightMoveIds(moveFrom, cells, pieceToMove)
      );
      break;
    }
    case "king": {
      suggestionMoveIds = getSuggestionMoveIdsForKing(moveFrom, cells, pieceToMove, isEnemiesKingMove);
      break;
    }
    default: {
      break;
    }
  }

  return suggestionMoveIds;
};

export const canSuggestThisMoveForLinearPiece = (cells: ICell[][], pieceToMove: IPiece, i, j): { canMove: boolean, isLastMove: boolean } => {
  if (!cells[i] || !cells[i][j] || cells[i][j].piece?.color === pieceToMove.color) {
    return { canMove: false, isLastMove: true };
  }

  if (!cells[i][j].piece) {
    return { canMove: true, isLastMove: false };
  }

  return { canMove: true, isLastMove: true };
};

export const getCellsCopyWithMovedPiece = (cells: ICell[][], moveFrom: string, moveTo: string) => {
  const cellFrom = cells.flat().find(el => el.id === moveFrom) ?? {} as ICell;

  return copy(cells).map(cellRow => {
    return cellRow.map(cell => {
      let piece = cell.piece;

      if (cell.id === moveTo && cellFrom.piece) {
        piece = {
          ...cellFrom.piece,
          hasMoved: true,
        };
      }

      if (cell.id === moveFrom) {
        piece = null;
      }

      return {
        ...cell,
        piece,
      };
    });
  });
};


export const getCellsUnderAttackByColor = (cells: ICell[][], color: Colors) => {
  let possibleMoveIds = new Set();

  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j].piece && cells[i][j].piece?.color !== color) {
        getSuggestionMoveIds(`${i}${j}`, cells, true).forEach(id => possibleMoveIds.add(id));
      }
    }
  }

  return [...possibleMoveIds];
};

