import { casashow } from './../casashow.model';
import { Router } from '@angular/router';
import { CasashowService } from './../casashow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casashow-create',
  templateUrl: './casashow-create.component.html',
  styleUrls: ['./casashow-create.component.scss']
})
export class CasashowCreateComponent implements OnInit {

  casashow: casashow = {
    nome: '',
    endereco: '',
    capacidade: null,
    telefone: '',
    site: ''

  }

  constructor(private casashowService: CasashowService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCasashow(): void {
    this.casashowService.create(this.casashow).subscribe(() => {
      this.casashowService.showMessege('Casa de show criada com sucesso!')
      this.router.navigate(['/casashow'])
    })
  }

  cancel(): void {
    this.router.navigate(['/casashow'])
  }

}
