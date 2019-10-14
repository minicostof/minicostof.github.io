import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefuelingsComponent } from './edit-refuelings.component';

describe('EditRefuelingsComponent', () => {
  let component: EditRefuelingsComponent;
  let fixture: ComponentFixture<EditRefuelingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRefuelingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefuelingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
