import { createAction, props } from "@ngrx/store";

const actionPrefix = '[Table]';

export const move = createAction(`${actionPrefix} Move`, props<{ newMove: string }>())

export const moveStart = createAction(`${actionPrefix} Move Start`, props<{ moveFrom: string }>())

export const moveFinish = createAction(`${actionPrefix} Move Finish`, props<{ moveTo: string }>())

export const moveAbort = createAction(`${actionPrefix} Move Abort`)

export const moveSuggestionStart = createAction(`${actionPrefix} Move Suggestion Start`)

export const cellsResetSuggestionAndHighlighting = createAction(`${actionPrefix} Cells Reset Suggestion And Highlighting`)
