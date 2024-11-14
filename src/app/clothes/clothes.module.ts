import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ManClotheComponent, WomenClotheComponent, ChildClotheComponent, BodysuitComponent, TShirtComponent, DressComponent, SkirtComponent, JeansComponent, ShortsComponent } from './index';



@NgModule({
    declarations: [
    ManClotheComponent,
    WomenClotheComponent,
    ChildClotheComponent,
    BodysuitComponent,
    TShirtComponent,
    DressComponent,
    SkirtComponent,
    JeansComponent,
    ShortsComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ClothesModule {}
