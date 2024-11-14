import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenClotheComponent } from './women-clothe.component';

describe('WomenClotheComponent', () => {
  let component: WomenClotheComponent;
  let fixture: ComponentFixture<WomenClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenClotheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
