import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  standalone: false,
  
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
   constructor(private titleservice: Title) {
      this.titleservice.setTitle("Roberto Mateus - contato");
     }
}
