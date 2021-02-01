import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesBusquedaComponent } from './heroes-busqueda.component';

describe('HeroesBusquedaComponent', () => {
  let component: HeroesBusquedaComponent;
  let fixture: ComponentFixture<HeroesBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
