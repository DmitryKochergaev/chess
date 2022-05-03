import { Injectable, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as actions from './table.actions';
import * as selectors from './table.selectors';
import { Actions, ofType } from "@ngrx/effects";

@Injectable({ providedIn: 'root' })
export class ChTableFacade implements OnInit {

  public cells$ = this.store.pipe(select(selectors.getCells));

  public pieces$ = this.store.pipe(select(selectors.getPieces));

  public onMoveEnd$ = this.actions$.pipe(ofType(actions.moveAbort, actions.moveFinish))

  constructor(private store: Store, private actions$: Actions,) {
    //todo @takeuntil

    this.onMoveEnd$.subscribe(() => this.cellsReset())
  }

  public ngOnInit(): void {

  }

  public move(newMove) {
    this.store.dispatch(actions.move({ newMove }))
  }

  public cellsReset() {
    this.store.dispatch(actions.cellsResetSuggestionAndHighlighting())
  }

}
