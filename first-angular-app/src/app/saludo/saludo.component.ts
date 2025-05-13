import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  nombre: string = 'carlitos';
  mensaje: string = 'mensaje de bienvenida';

  saludar(): void{
    alert(this.mensaje + ". hola " + this.nombre);
  }
}
