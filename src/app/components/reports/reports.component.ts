import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports = [
    { title: 'Report 1', description: 'Description 1', time: '08:00', day: 'Monday', place: 'Classroom 1' },
    { title: 'Report 2', description: 'Description 2', time: '09:00', day: 'Tuesday', place: 'Classroom 2' },
    { title: 'Report 3', description: 'Description 3', time: '10:00', day: 'Wednesday', place: 'Classroom 3' },
    { title: 'Report 4', description: 'Description 4', time: '11:00', day: 'Thursday', place: 'Classroom 4' },
    { title: 'Report 5', description: 'Description 5', time: '12:00', day: 'Friday', place: 'Classroom 5' },
    { title: 'Report 6', description: 'Description 6', time: '13:00', day: 'Monday', place: 'Classroom 6' },
    { title: 'Report 7', description: 'Description 7', time: '14:00', day: 'Tuesday', place: 'Classroom 7' },
    { title: 'Report 8', description: 'Description 8', time: '15:00', day: 'Wednesday', place: 'Classroom 8' },
    { title: 'Report 9', description: 'Description 9', time: '16:00', day: 'Thursday', place: 'Classroom 9' },
  ];
}
