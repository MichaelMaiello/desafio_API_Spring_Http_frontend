import { casashow } from './../casashow.model';
import { Component, OnInit } from '@angular/core';
import { CasashowService } from '../casashow.service';

@Component({
  selector: 'app-casashow-read',
  templateUrl: './casashow-read.component.html',
  styleUrls: ['./casashow-read.component.scss']
})
export class CasashowReadComponent implements OnInit {

  constructor(private casashowService: CasashowService) { }

  casashows: casashow[];

  displayedColumns = ['id', 'nome', 'endereco', 'capacidade', 'telefone', 'site', 'action'];

  ngOnInit(): void {
    this.casashowService.read().subscribe(casashows => {
      this.casashows = casashows;
    })
  }

}
