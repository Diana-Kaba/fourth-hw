import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManClotheComponent } from './man-clothe.component';

describe('ManClotheComponent', () => {
  let component: ManClotheComponent;
  let fixture: ComponentFixture<ManClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManClotheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
