import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MedicosComponent } from './componentes/medicos/medicos.component';
import { MedicoComponent } from './componentes/medico/medico.component';

const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  { path:"Usuario", component: UsuarioComponent},
  { path:"Usuario/:id", component: UsuarioComponent},
  {path:"medicos", component:MedicosComponent},
  { path:"medico", component: MedicoComponent},
  { path:"medico/:id", component: MedicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
