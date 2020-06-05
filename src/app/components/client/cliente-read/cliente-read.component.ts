import { client } from './../client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {

  clients: client[];
  displayedColumns = ['id', 'nome', 'email', 'telefone', 'action'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients;
    } )
  }
}
