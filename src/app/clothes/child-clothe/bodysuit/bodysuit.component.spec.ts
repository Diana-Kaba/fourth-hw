import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysuitComponent } from './bodysuit.component';

describe('BodysuitComponent', () => {
  let component: BodysuitComponent;
  let fixture: ComponentFixture<BodysuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodysuitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodysuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
