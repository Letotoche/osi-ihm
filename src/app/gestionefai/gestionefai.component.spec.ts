import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionefaiComponent } from './gestionefai.component';

describe('GestionefaiComponent', () => {
  let component: GestionefaiComponent;
  let fixture: ComponentFixture<GestionefaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionefaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionefaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
