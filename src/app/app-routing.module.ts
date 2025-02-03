import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent},
  { path: '', component: InicioComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
