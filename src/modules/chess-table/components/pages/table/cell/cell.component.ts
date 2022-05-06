import { Component, Input } from '@angular/core';
import { ICell } from "../../../../models/table/table.model";
import { ChTableFacade } from "../../../../stores/table/table.facade";

@Component({
  selector: 'chess-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class ChCellComponent {

  @Input() cell?: ICell;

  public get canMove() {
    return this.cell?.canMove && !this.cell?.piece
  }

  public get canTake() {
    return this.cell?.canMove && this.cell?.piece
  }

  constructor(private tableFacade: ChTableFacade) {
  }

  public onCellClick() {
    this.tableFacade.move(this.cell?.id)
  }
}
