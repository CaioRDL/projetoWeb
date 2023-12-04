/* import { AppRoutingModule } from './app.routing.module'; */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MedicoService } from 'src/service/MedicoService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsuarioService } from 'src/service/UsuarioService';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list'; 
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MedicoComponent } from './componentes/medico/medico.component';
import { MedicosComponent } from './componentes/medicos/medicos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsuariosComponent,
    UsuarioComponent,
    MedicoComponent,
    MedicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService,MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
