import { createReducer, on } from "@ngrx/store";
import * as actions from './table.actions';
import { getCellsCopyWithMovedPiece, getSuggestionMoveIds, ICell } from "../../models/table/table.model";
import { INITIAL_CELLS } from "../../constants/table.constants";
import copy from "fast-copy";

export const tableFeatureKey = 'table';

export interface ITableState {
  moveFrom: string | null,
  cells: ICell[][],
}

const initialState: ITableState = {
  moveFrom: null,
  cells: [...INITIAL_CELLS],
};

const createTableReducer = createReducer(
  initialState,

  on(actions.moveStart, (state, { moveFrom }) => {
    const { cells } = state;

    const copiedCells = copy(cells).map(cellRow => {
      return cellRow.map(cell => {
        let selected = cell.id === moveFrom;

        return {
          ...cell,
          selected,
        };
      });
    });

    return {
      ...state,
      cells: copiedCells,
      moveFrom,
    };
  }),

  on(actions.moveFinish, (state, { moveTo }) => {
    const { moveFrom, cells } = state;

    return {
      ...state,
      cells: getCellsCopyWithMovedPiece(cells, moveFrom ?? '', moveTo),
      moveFrom: null,
    };
  }),

  on(actions.moveAbort, (state) => {
    return {
      ...state,
      moveFrom: null,
    };
  }),

  on(actions.moveSuggestionStart, (state) => {
    const { moveFrom, cells } = state;
    const suggestionMoveIds = getSuggestionMoveIds(moveFrom ?? '', cells);

    const copiedCells = copy(cells).map(cellRow => {
      return cellRow.map(cell => {
        return {
          ...cell,
          canMove: suggestionMoveIds.includes(cell.id)
        };
      });
    });

    return {
      ...state,
      cells: copiedCells,
    };
  }),

  on(actions.cellsResetSuggestionAndHighlighting, (state) => {
    const { cells } = state;

    const copiedCells = copy(cells).map(cellRow => {
      return cellRow.map(cell => {
        return {
          ...cell,
          canMove: false,
          selected: false,
        };
      });
    });

    return {
      ...state,
      cells: copiedCells,
    };
  })
);

export function tableReducer(state, action) {
  return createTableReducer(state, action);
}














