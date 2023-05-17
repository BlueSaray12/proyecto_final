import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './components/e404/e404.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'productos', component: ProductosComponent},
  {path:'ofertas', component: OfertasComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'contactos', component: ContactosComponent},
  {path:'formulario', component: FormularioComponent, canActivate:[LoginGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
