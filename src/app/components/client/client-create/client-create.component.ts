import { client } from './../client.model';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {
 
  client: client = {
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  }

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }


  createCliente(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente criado com sucesso!')
      this.router.navigate(['/client'])
    })
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }
}
