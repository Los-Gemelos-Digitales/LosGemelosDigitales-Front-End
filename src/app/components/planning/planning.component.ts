import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCalendar, MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {EvacuationPlansService} from '../../data/services/evacuation-plans/evacuation-plans.service';
import {EvacuationPlans} from '../../data/models/evacuation-plans/evacuationPlans';

@Component({
  selector: 'app-planning',
  standalone: true,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  imports: [MatDatepickerModule, MatNativeDateModule, CommonModule, ToolbarComponent, MatIconModule, FormsModule, MatCardModule] // Añade CommonModule a los imports
})
export class PlanningComponent implements OnInit {
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>; // Referencia al calendario
  selectedDate: Date = new Date(); // Fecha seleccionada
  month = ''; // Nombre del mes actual
  events: EvacuationPlans[] = []; // Lista de eventos de evacuación
  filteredEvents: EvacuationPlans[] = []; // Lista de eventos filtrados por mes
  isFormVisible = false; // Para controlar la visibilidad del formulario
  newEvent: any = {}; // Objeto para almacenar los datos del nuevo evento

  constructor(private evacuationPlansService: EvacuationPlansService) {}

  ngOnInit() {
    this.updateMonthAndFilterEvents(this.selectedDate);
    this.loadEvacuationPlans(); // Cargar los planes de evacuación cuando se inicie el componente
  }

  ngAfterViewInit() {
    this.calendar.stateChanges.subscribe(() => {
      this.updateMonthAndFilterEvents(this.calendar.activeDate);
    });
  }

  // Cargar los planes de evacuación desde la API
  loadEvacuationPlans() {
    this.evacuationPlansService.getList().subscribe((plans) => {
      this.events = plans;
      this.updateMonthAndFilterEvents(this.selectedDate); // Filtrar eventos según el mes actual
    });
  }

  updateMonthAndFilterEvents(date: Date) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    this.month = monthNames[date.getMonth()];
    this.filteredEvents = this.events.filter(
      event =>
        new Date(event.date).getMonth() === date.getMonth() &&
        new Date(event.date).getFullYear() === date.getFullYear()
    );
  }

  onDateSelected(date: Date) {
    this.selectedDate = date;
    this.updateMonthAndFilterEvents(date);
  }

  openEventForm() {
    this.isFormVisible = !this.isFormVisible; // Si el formulario ya está visible, se oculta
    if (this.isFormVisible) {
      this.newEvent = { date: this.selectedDate }; // Preconfigura la fecha del evento cuando se abre el formulario
    }
  }

  addEvent() {
    this.evacuationPlansService.createItem(this.newEvent).subscribe((newPlan) => {
      this.events.push(newPlan); // Agregar el nuevo plan a la lista de eventos
      this.updateMonthAndFilterEvents(this.selectedDate); // Filtrar nuevamente por mes
      this.isFormVisible = false; // Ocultar el formulario después de agregar el evento
    });
  }
}
