// cita-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaIndexComponent } from './cita-index/cita-index.component'; // Importa el componente de index de citas
import { CitaDetailComponent } from './cita-detail/cita-detail.component';

import { CitaAllComponent } from './cita-all/cita-all.component';
const routes: Routes = [
  { path: 'sucursal', component: CitaIndexComponent },
  { path: 'cita/:id', component: CitaDetailComponent },
 
  { path: 'citatable', component:CitaAllComponent }
  // Puedes agregar más rutas aquí según sea necesario, por ejemplo:
  // { path: 'detalle/:id', component: DetalleCitaComponent },
  // { path: 'editar/:id', component: EditarCitaComponent },
  // { path: 'crear', component: CrearCitaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
