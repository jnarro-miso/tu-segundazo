/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListaComponent } from './vehiculo-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListaComponent', () => {
  let component: VehiculoListaComponent;
  let fixture: ComponentFixture<VehiculoListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ VehiculoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      let vehiculo = new Vehiculo(
        faker.number.int(100),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(4),
        faker.number.int({ min: 1800, max: 2020 }),
        faker.number.int(2000),
        faker.lorem.word(),
        faker.image.url()
      )
      component.vehiculos.push(vehiculo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    expect(debug.query(By.css('.table'))).toBeTruthy();
  })

  it('should render 4 <th[scope="col"]> elements', () => {
    expect(debug.queryAll(By.css('th[scope="col"]'))).toHaveSize(4);
  })

  it('should render 3 <th[scope="row"]> elements', () => {
    expect(debug.queryAll(By.css('th[scope="row"]'))).toHaveSize(3);
  })
});
