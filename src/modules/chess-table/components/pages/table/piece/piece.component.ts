import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IPiece } from "../../../../models/table/table.model";

@Component({
  selector: 'chess-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss'],
})
export class ChPieceComponent {

  @Input() piece?: IPiece | null;

  public get pieceImage() {
    return `url(/assets/images/${this.piece?.image}.png)`;
  }

  public get pieceTop() {
    return `${this.piece?.position?.top}00%`
  }

  public get pieceLeft() {
    return `${this.piece?.position?.left}00%`
  }

  public get pieceTransform() {
    return `translate(${this.pieceLeft},${this.pieceTop})`
  }


  constructor() {
  }

}
