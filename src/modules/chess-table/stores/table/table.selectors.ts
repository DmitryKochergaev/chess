import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITableState, tableFeatureKey } from "./table.reducers";
import { IPiece } from "../../models/table.model";

const getTableSelector = createFeatureSelector<ITableState>(tableFeatureKey);

export const getCells = createSelector(getTableSelector, (state: ITableState) => {
  return state.cells;
})

export const getPieces = createSelector(getTableSelector, (state: ITableState) => {
  return state.cells.flat().filter(el => el.piece).map(el => {
    const [top, left] = el.id.split('');

    return {
      ...el.piece,
      position: {
        top,
        left,
      }
    } as IPiece
  });
})

export const getMoveFrom = createSelector(getTableSelector, (state: ITableState) => {
  return state.moveFrom;
})

export const getMoveFromAndCells = createSelector(getMoveFrom, getCells, (moveFrom, cells) => {
  return { moveFrom, cells }
})











