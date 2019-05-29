/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EfaiFormComponent } from './efai-form.component';

describe('EfaiFormComponent', () => {
  let component: EfaiFormComponent;
  let fixture: ComponentFixture<EfaiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfaiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfaiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
