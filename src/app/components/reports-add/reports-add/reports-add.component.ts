import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {NgForOf} from '@angular/common';
import {ReportsService} from '../../../data/services/reports/reports.service';

@Component({
  selector: 'app-reports-add',
  standalone: true,
  imports: [
    MatDialogTitle,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioGroup,
    MatLabel,
    MatRadioButton,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
    NgForOf,
    MatDialogContent
  ],
  templateUrl: './reports-add.component.html',
  styleUrl: './reports-add.component.css'
})
export class ReportsAddComponent implements OnInit{
  reportForm: FormGroup;

  constructor(private _fb: FormBuilder, private _repService: ReportsService) {
    this.reportForm = this._fb.group({
      admin_id: [''],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this._repService.getList();
  }

  onFormSubmit() {
    if (this.reportForm.valid) {
      const report = this.reportForm.value;

      // Llamamos al servicio para crear el reporte, sin preocuparnos por el ID
      this._repService.createItem(report).subscribe({
        next: (createdReport) => {
          alert('Report added successfully!');
          console.log('Created report:', createdReport); // El reporte ya tiene un ID asignado
          this._repService.getList(); // Actualizamos la lista de reportes
          this.reportForm.reset(); // Limpiamos el formulario
        },
        error: (err: any) => {
          console.error('Error adding report:', err);
          alert('An error occurred. Please try again.');
        },
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
