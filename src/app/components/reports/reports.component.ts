import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {Reports} from '../../data/models/reports/reports';
import {ReportsService} from '../../data/services/reports/reports.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ReportsAddComponent} from '../reports-add/reports-add/reports-add.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {HomeComponent} from '../../home/home.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, MatTableModule,
    MatButtonModule, MatIconModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule,
      HomeComponent, ReportsAddComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  reports: Reports[] = []; // Definir reports como un arreglo de objetos Reports
  displayedColumns: string[] = ['type', 'description', 'date', 'place', 'details', 'action'];

  constructor(private reportService: ReportsService) {}

  ngOnInit(): void {
    this.getList(); // Obtener los reportes al inicializar
  }

  getList() {
    this.reportService.getList().subscribe(data => {
      this.reports = data;
    });
  }
  deleteReport(id: number) {
    this.reportService.deleteItem(id).subscribe({
      next: (res) => {
        this.getList();
      },
      error: console.log,
    });
  }

}
