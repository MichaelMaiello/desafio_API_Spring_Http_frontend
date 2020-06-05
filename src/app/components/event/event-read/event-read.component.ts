import { event } from './../event.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html',
  styleUrls: ['./event-read.component.scss']
})
export class EventReadComponent implements OnInit {

  events: event[];
  displayedColumns = ['id', 'nome', 'descricao', 'qtdIngresso', 'preco', 'action'];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.read().subscribe(events => {
      this.events = events
    })
  }

}
