import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from '../event.model';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {


  event: event = {
    nome: '',
    descricao: '',
    qtdIngresso: null,
    preco: null,
  }

  constructor(private eventService: EventService,
     private router: Router) { }

  ngOnInit(): void {
    
  }

  createEvent(): void {
    this.eventService.create(this.event).subscribe(() => {
      this.eventService.showMessage('Evento criado com sucesso!')
      this.router.navigate(['/event'])
    })
  }

  cancel(): void {
    this.router.navigate(['/event'])
  }
}
