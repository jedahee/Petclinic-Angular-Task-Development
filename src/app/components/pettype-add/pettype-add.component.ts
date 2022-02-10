import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pettype } from 'src/app/models/pettype';
import { PettypeService } from 'src/app/services/pettype.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pettype-add',
  templateUrl: './pettype-add.component.html',
  styleUrls: ['./pettype-add.component.less']
})
export class PettypeAddComponent implements OnInit {

  public pett: Pettype = <Pettype>{};

  @Output() onNew = new EventEmitter<Pettype>();

  constructor(private PTService: PettypeService) { }

  onSubmit(PT: Pettype) {
    this.PTService.addPetTypes(PT).subscribe(pett => {
      this.pett = pett;
      this.onNew.emit(this.pett);
    });
  }

  ngOnInit(): void {
  }

}
