import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {Reports} from '../../data/models/reports/reports';
import {ReportsService} from '../../data/services/reports/reports.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {ReportsAddComponent} from '../reports-add/reports-add/reports-add.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {HomeComponent} from '../../home/home.component';
import {ReportsDetailsComponent} from '../reports-details/reports-details.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, MatTableModule,
    MatButtonModule, MatIconModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule,
    HomeComponent, ReportsAddComponent, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  reports: Reports[] = [];
  displayedColumns: string[] = ['index', 'type', 'description', 'date', 'place', 'details', 'action'];
  searchType: string = '';  // Variable para almacenar el tipo de búsqueda

  constructor(private reportService: ReportsService, private _matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getList();
  }

  openDetails(report: Reports): void {
    this._matDialog.open(ReportsDetailsComponent, {
      data: report, // Pasamos el reporte seleccionado como datos al modal
      width: '400px', // Puedes ajustar el tamaño del modal si lo deseas
    });
  }

  getList() {
    this.reportService.getList().subscribe({
      next: (data) => {
        console.log('Reports received: ', data);  // Verifica los datos
        this.reports = data;  // Actualiza la lista de reportes
      },
      error: (err) => {
        console.log('Error fetching reports:', err);
      },
    });
  }

  deleteReport(id: number) {
    this.reportService.deleteReport(id).subscribe({
      next: (response) => {
        console.log('Delete response:', response);  // Aquí puedes revisar la respuesta completa
        if (response.status === 200) {
          this.getList();  // Recargar la lista de reportes
        } else {
          alert('Failed to delete the report.');
        }
      },
      error: (err) => {
        console.error('Error during deletion:', err);
        alert('Failed to delete the report.');
      }
    });
  }
  searchReports() {
    if (this.searchType) {
      this.reports = this.reports.filter(report =>
        report.type.toLowerCase().includes(this.searchType.toLowerCase())
      );
    } else {
      this.getList();  // Si no hay búsqueda, carga todos los reportes nuevamente
    }
  }

  // Método que se llama cuando se recibe el evento desde ReportsAddComponent
  onReportAdded() {
    this.getList();
  }
}
