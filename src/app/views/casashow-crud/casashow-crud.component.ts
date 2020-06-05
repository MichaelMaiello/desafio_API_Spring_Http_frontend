import { HeaderService } from './../../components/templete/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-casashow-crud',
  templateUrl: './casashow-crud.component.html',
  styleUrls: ['./casashow-crud.component.scss']
})
export class CasashowCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastor de Casa de Show',
      icon: 'storefront',
      routeUrl: '/casashow'
     }
   }

  ngOnInit(): void {
  }

  navegateToCasaShowCreate(){
    this.router.navigate(['casashow/create']);
  }

}
