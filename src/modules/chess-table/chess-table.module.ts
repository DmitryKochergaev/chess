import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ChTableComponent } from "./components/pages/table/table.component";
import { ChCellComponent } from "./components/pages/table/cell/cell.component";
import { StoreModule } from "@ngrx/store";
import { tableFeatureKey, tableReducer } from "./stores/table/table.reducers";
import { CommonModule } from "@angular/common";
import { ChPieceComponent } from "./components/pages/table/piece/piece.component";
import { EffectsModule } from "@ngrx/effects";
import { ChTableEffects } from "./stores/table/table.effects";

const routes: Routes = [
  {
    path: '',
    component: ChTableComponent,
  }
];

@NgModule({
  declarations: [
    ChTableComponent,
    ChCellComponent,
    ChPieceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(tableFeatureKey, tableReducer),
    EffectsModule.forFeature([ChTableEffects]),
  ],
  providers: [],
})
export class ChTableModule {
}
