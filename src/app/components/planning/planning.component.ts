import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-planning',
  standalone: true,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  imports: [MatDatepickerModule, MatNativeDateModule, CommonModule, ToolbarComponent] // Añade CommonModule a los imports
})
export class PlanningComponent {
  month = 'January';
  selectedDate: Date; 
  events = [
    {
      date: new Date(2024, 0, 15),  
      title: 'Simulacro de Sismo',
      time: '10:30 AM',
      status: 'Confirmado',
      details: 'Rutas activas: Principal y secundaria'
    },
    {
      date: new Date(2024, 0, 20),
      title: 'Simulacro de Incendio - Bloque B',
      time: '12:00 PM',
      status: 'En preparación'
    },
    {
      date: new Date(2024, 0, 30),
      title: 'Mantenimiento de Extintores',
      time: '9:00 AM',
      status: 'Programado',
      details: 'Personal asignado: Seguridad'
    }
  ];

  constructor() {
    this.selectedDate = new Date(); 
  }
}