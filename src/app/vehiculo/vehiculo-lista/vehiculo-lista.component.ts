import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

type ContadorMarca = { [marca: string]: number };

@Component({
  selector: 'app-vehiculo-lista',
  templateUrl: './vehiculo-lista.component.html',
  styleUrls: ['./vehiculo-lista.component.css']
})
export class VehiculoListaComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  vehiculosPorMarca: ContadorMarca = {};

  constructor(private vehiculoService: VehiculoService) { }

  obtenerVehiculos(): void {
    this.vehiculoService.obtenerVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;

      this.vehiculosPorMarca = vehiculos.reduce((accum: ContadorMarca, curr) => {
        accum[curr.marca] = (accum[curr.marca] || 0) + 1;
        return accum;
      }, {})
    });
  }

  obtenerKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  ngOnInit() {
    this.obtenerVehiculos();
  }

}
