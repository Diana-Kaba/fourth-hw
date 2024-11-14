import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureeComponent } from './puree.component';

describe('PureeComponent', () => {
  let component: PureeComponent;
  let fixture: ComponentFixture<PureeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PureeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
