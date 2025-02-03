import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: false,
  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private titleservice: Title) {
    this.titleservice.setTitle("Roberto Mateus - home");
   }
}
