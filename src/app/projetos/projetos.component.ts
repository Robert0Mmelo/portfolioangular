import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projetos',
  standalone: false,
  
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
   constructor(private titleservice: Title) {
      this.titleservice.setTitle("Roberto Mateus - projetos");
     }
}
