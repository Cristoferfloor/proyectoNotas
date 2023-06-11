import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
})
export class EstudiantesComponent {
  estudiantes: any[] = [];
  estudianteForm: FormGroup;
  isEditMode = false;
  editIndex!: number;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.estudianteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      notas: this.formBuilder.array([]),
    });
  }

  agregarEstudiante() {
    this.isEditMode = false;
    this.estudianteForm.reset();
    this.router.navigate(['/estudiantes/agregar']);
  }

  eliminarEstudiante(estudiante: any) {
    const index = this.estudiantes.indexOf(estudiante);
    if (index > -1) {
      this.estudiantes.splice(index, 1);
    }
  }

  editarEstudiante(estudiante: any) {
    this.isEditMode = true;
    this.editIndex = this.estudiantes.indexOf(estudiante);
    this.estudianteForm.patchValue(estudiante);
    this.router.navigate(['/estudiantes/agregar']);
  }
}
