import { HeaderService } from './../../components/templete/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.scss']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastor de Clientes',
      icon: 'person_add',
      routeUrl: '/client'
     }
   }

  ngOnInit(): void {
  }

  navigateToClienteCreate(){
    this.router.navigate(['client/create'])
  }

}
