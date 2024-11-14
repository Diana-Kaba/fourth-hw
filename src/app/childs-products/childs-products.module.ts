import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ToysComponent, FoodComponent, PureeComponent, JuiceComponent, CarComponent, DollComponent } from './index';



@NgModule({
  declarations: [
    ToysComponent,
    FoodComponent,
    PureeComponent,
    JuiceComponent,
    CarComponent,
    DollComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ]
})
export class ChildsProductsModule { }
