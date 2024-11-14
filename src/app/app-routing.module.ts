import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildClotheComponent, WomenClotheComponent, ManClotheComponent, DressComponent, SkirtComponent, JeansComponent, ShortsComponent, BodysuitComponent, TShirtComponent } from './clothes/index';
import { CarComponent, DollComponent, FoodComponent, JuiceComponent, PureeComponent, ToysComponent } from './childs-products/index';

const routes: Routes = [
  { path: 'child-clothe', component: ChildClotheComponent, children:
  [
    { path: 'bodysuit', component: BodysuitComponent },
    { path: 't-shirt', component: TShirtComponent },
  ]
  },
  { path: 'woman-clothe', component: WomenClotheComponent, children:
    [
      { path: 'dress', component: DressComponent },
      { path: 'skirt', component: SkirtComponent },
    ]
  },
  { path: 'man-clothe', component: ManClotheComponent, children:
    [
      { path: 'jeans', component: JeansComponent },
      { path: 'shorts', component: ShortsComponent },
    ]
  },
  { path: 'food', component: FoodComponent, children:
    [
      { path: 'juice', component: JuiceComponent },
      { path: 'puree', component: PureeComponent },
    ]
  },
  { path: 'toys', component: ToysComponent, children:
    [
      { path: 'car', component: CarComponent },
      { path: 'doll', component: DollComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
