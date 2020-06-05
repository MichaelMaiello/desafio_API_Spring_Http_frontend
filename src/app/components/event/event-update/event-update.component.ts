import { event } from './../event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent implements OnInit {

  event: event;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.eventService.readById(id).subscribe(event => {
      this.event = event
    });
  }

  updateEvent(): void {
    this.eventService.update(this.event).subscribe(() => {
      this.eventService.showMessage('Evento atualizado!')
      this.router.navigate(['/event']);
    });
  }

  cancel(): void {
    this.router.navigate(['/event']);
  }
}
