import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';

const routes: Routes = [
  {
    path: 'estudiantes',
    component: EstudiantesComponent,
  },
  {
    path: 'estudiantes/agregar',
    loadChildren: () =>
      import('./agregar-estudiante/agregar-estudiante.component').then(
        (m) => m.AgregarEstudianteComponent
      ),
  },
 
    {
      path: '',
      component: AgregarEstudianteComponent,
    },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
