import { HeaderService } from './../../components/templete/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.scss']
})
export class EventCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastor de Eventos',
      icon: 'local_activity',
      routeUrl: '/event'
     }

   }

  ngOnInit(): void {
  }

  navigateToEventCreate(){
    this.router.navigate(['event/create']);
  }
}
