import { Component } from '@angular/core';
import { ChTableFacade } from "../../../stores/table/table.facade";

@Component({
  selector: 'chess-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class ChTableComponent {

  public cells$ = this.tableFacade.cells$;

  public pieces$ = this.tableFacade.pieces$;

  constructor(private tableFacade: ChTableFacade) {
  }

  // todo 94 make global style
  // todo global colors



  public trackBy(index, item) {
    return item.id;
  }

}
