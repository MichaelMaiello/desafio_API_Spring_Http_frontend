import { casashow } from './../casashow.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CasashowService } from './../casashow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casashow-update',
  templateUrl: './casashow-update.component.html',
  styleUrls: ['./casashow-update.component.scss']
})
export class CasashowUpdateComponent implements OnInit {

  casashow: casashow;

  constructor(
    private casashowService : CasashowService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.casashowService.readById(id).subscribe(casashow => {
      this.casashow = casashow
    });
  }

  updateCasashow(): void {
    this.casashowService.update(this.casashow).subscribe(() => {
      this.casashowService.showMessege('Casa de Show atualizada!')
      this.router.navigate(['/casashow']);
    });
  }

  cancel(): void {
    this.router.navigate(['/casashow'])
  }

}
