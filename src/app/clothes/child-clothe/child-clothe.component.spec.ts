import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildClotheComponent } from './child-clothe.component';

describe('ChildClotheComponent', () => {
  let component: ChildClotheComponent;
  let fixture: ComponentFixture<ChildClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildClotheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
