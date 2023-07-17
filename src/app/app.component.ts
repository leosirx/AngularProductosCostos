import { Component } from '@angular/core';
import { Producto } from './interface/productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mostrarLista = true;


  nombresCostos: Producto[] = [
    { nombre: 'Celular', costo: '$ 100.000' },
    { nombre: 'Notebook', costo: '$ 350.000' },
    { nombre: 'Auriculares', costo: '$ 20.000' },
    { nombre: 'Cargador', costo: '$ 1.500' },
    { nombre: 'Mochila', costo: '$ 12.000' },
    { nombre: 'Aro de luz', costo: '$ 5.000' },
    { nombre: 'Cable USB', costo: '$ 800' },

  ];
  title: any;
  
}
