import { Component, Input, OnInit } from '@angular/core';
import { Visit } from 'src/app/models/visit';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.less']
})
export class VisitListComponent implements OnInit {

  @Input() visitInp: Visit = <Visit>{};
  public visit: Visit; 

  constructor(private visitService: VisitService) {
    this.visit = {
      id: -1,
      petId: this.visitInp.petId,
      visitDate: new Date(),
      description: ""

    }
  }
  
  ngOnInit(): void {
    this.visitService.getVisitById(this.visitInp.id).subscribe(datos => {
      this.visit = datos;
    });
  }

}
