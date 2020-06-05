import { casashow } from './../casashow.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CasashowService } from './../casashow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casashow-delete',
  templateUrl: './casashow-delete.component.html',
  styleUrls: ['./casashow-delete.component.scss']
})
export class CasashowDeleteComponent implements OnInit {

  casashow: casashow;

  constructor(
    private casashowSevice: CasashowService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.casashowSevice.readById(id).subscribe(casashow => {
      this.casashow = casashow
    })
  }

  deleteCasashow(): void {
    this.casashowSevice.delete(this.casashow.id).subscribe(() => {
      this.casashowSevice.showMessege('casashowo excluido!');
      this.router.navigate(['/casashow']);
    })
  }

  cancel(): void {
    this.router.navigate(['/casashow']);
  }
}
