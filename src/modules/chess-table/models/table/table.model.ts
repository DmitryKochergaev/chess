import { getSuggestionMoveIdsForBishop } from "./bishop.model";
import { getSuggestionMoveIdsForPawn } from "./pawn.model";
import { getSuggestionMoveIdsForRook } from "./rook.model";

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
      suggestionMoveIds = getSuggestionMoveIdsForBishop(moveFrom, cells, pieceToMove);
      break;
    }
    case "rook": {
      suggestionMoveIds = getSuggestionMoveIdsForRook(moveFrom, cells, pieceToMove);
      break;
    }
    case "queen": {
      break;
    }
    case "king": {
      break;
    }
    default: {
      break;
    }
  }
  console.log('test3');

  return suggestionMoveIds;
};

export const canSuggestThisMoveForLinearPiece = (cells: ICell[][], pieceToMove: IPiece, i, j): { canMove: boolean, isLastMove: boolean } => {
  if (!cells[i] || !cells[i][j]) {
    return { canMove: false, isLastMove: true };
  }

  if (!cells[i][j].piece) {
    return { canMove: true, isLastMove: false };
  }

  if (cells[i][j].piece?.color === pieceToMove.color) {
    return { canMove: false, isLastMove: true };
  }

  return { canMove: true, isLastMove: true };
};
