import { EventService } from './../event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { event } from './../event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.scss']
})
export class EventDeleteComponent implements OnInit {

  event: event;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.readById(id).subscribe(event => {
      this.event = event
    })
  }

  deleteEvent(): void {
    this.eventService.delete(this.event.id).subscribe(() => {
      this.eventService.showMessage('Evento excluido!');
      this.router.navigate(['/event']);
    })
  }

  cancel(): void {
    this.router.navigate(['/event']);
  }
}
