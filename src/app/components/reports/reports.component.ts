import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {Reports} from '../../data/models/reports/reports';
import {ReportsService} from '../../data/services/reports/reports.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, MatTableModule, MatButtonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  reports: Reports[] = [];
  displayedColumns: string[] = ['id', 'type', 'description', 'date', 'place', 'details'];

  constructor(private reportService: ReportsService) {}

  ngOnInit(): void {
    this.reportService.getList().subscribe(data => {
      this.reports = data;
    });
  }
}
