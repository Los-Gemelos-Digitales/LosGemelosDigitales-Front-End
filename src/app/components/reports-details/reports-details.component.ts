import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Reports} from '../../data/models/reports/reports';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-reports-details',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  templateUrl: './reports-details.component.html',
  styleUrl: './reports-details.component.css'
})
export class ReportsDetailsComponent {
  constructor(
    public _matDialogRef: MatDialogRef<ReportsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reports // Recibimos los datos del reporte
  ) {}
}
