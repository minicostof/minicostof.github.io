import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefuelingsComponent } from './list-refuelings.component';

describe('ListRefuelingsComponent', () => {
  let component: ListRefuelingsComponent;
  let fixture: ComponentFixture<ListRefuelingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRefuelingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRefuelingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
