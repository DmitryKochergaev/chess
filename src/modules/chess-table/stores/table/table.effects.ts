import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import * as actions from './table.actions';
import * as selectors from './table.selectors';
import { concatMap, of, withLatestFrom } from "rxjs";
import { ICell } from "../../models/table/table.model";


@Injectable({
  providedIn: 'root',
})
export class ChTableEffects {

  public move = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.move),
      withLatestFrom(this.store.pipe(select(selectors.getMoveFromAndCells))),
      concatMap(([{ newMove }, { moveFrom, cells }]) => {
        return this.getMovementAction(moveFrom, newMove, cells);
      })
    )
  )

  public moveStart = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.moveStart),
      concatMap(() => {
        return of(actions.moveSuggestionStart())
      })
    )
  )

  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  private getMovementAction(oldMove: string | null, newMove: string, cells: ICell[][]) {
    if (!this.isMovePossible(oldMove, newMove, cells)) {
      return of(actions.moveAbort())
    }

    if (!oldMove) {
      return of(actions.moveStart({ moveFrom: newMove }))
    }

    return of(actions.moveFinish({ moveTo: newMove }))
  }

  private isMovePossible(oldMove: string | null, newMove: string, cells: ICell[][]): boolean {
    // cannot move to the same position
    if (oldMove === newMove) {
      return false;
    }

    // cannot make illegal moves
    // if (oldMove && !getSuggestionMoveIds(oldMove,cells).includes(newMove)) {
    //   return false;
    // }

    const flatedCells = cells.flat();
    const cellFrom = flatedCells.find(el => el.id === oldMove);
    const cellTo = flatedCells.find(el => el.id === newMove);

    // there should be a piece on the starting cell
    if (!cellFrom?.piece && oldMove) {
      return false;
    }

    // can't move to an ally's cell
    if (cellFrom?.piece?.color === cellTo?.piece?.color) {
      return false
    }

    return true;
  }
}









