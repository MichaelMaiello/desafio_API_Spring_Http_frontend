import { client } from './../client.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss']
})
export class ClientDeleteComponent implements OnInit {

  client: client;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.clientService.readById(id).subscribe(client => {
        this.client = client
      })
    }
  
    deleteCliente(): void {
      this.clientService.delete(this.client.id).subscribe(() => {
        this.clientService.showMessage('cliento excluido!');
        this.router.navigate(['/client']);
      })
    }

  cancel(): void {
    this.router.navigate(['/client']);
  }

}
