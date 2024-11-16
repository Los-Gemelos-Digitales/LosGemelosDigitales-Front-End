import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
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
  @Output() reportAdded = new EventEmitter<void>();
  reportForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _repService: ReportsService
  ) {
    this.reportForm = this._fb.group({
      admin_id: [1],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    if (this.reportForm.valid) {
      const report = this.reportForm.value;

      this._repService.createItem(report).subscribe({
        next: () => {
          alert('Report added successfully!');
          this.reportForm.reset({ admin_id: 1 }); // Reiniciar con admin_id predeterminado
          this.reportAdded.emit(); // Emitir evento para notificar que se creó un reporte
        },
        error: (err) => {
          console.error('Error adding report:', err);
          alert('An error occurred. Please try again.');
        },
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
