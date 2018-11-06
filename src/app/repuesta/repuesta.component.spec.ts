import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestaComponent } from './repuesta.component';

describe('RepuestaComponent', () => {
  let component: RepuestaComponent;
  let fixture: ComponentFixture<RepuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
