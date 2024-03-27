import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase-04';
  alumnos = ['alumno1', 'alumno2', 'alumno3', 'alumno4'];
  listaDeAlumnos = true;
  lista = true;
  // hasError = false;
  // isDisable = true;
  // students = ['uno', 'dos', 'tres'];

  // status: 'en-camino' | 'entregado' | 'en-preparacion' = 'en-preparacion';

  // alternalError() {
  //   this.hasError = !this.hasError;
  // }
}
