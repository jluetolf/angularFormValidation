import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnChanges {
  @Input() names: [{ firstname: string, lastname: string }];
  @Input() nameFormArray: FormArray;
  @Input() isValidationRequired: boolean;


  constructor() {

  }


  ngOnChanges(changes: SimpleChanges): void {
    // this.nameFormArray.push(new FormGroup({}));
    // this.nameFormArray.push(new FormGroup({}));
    // this.names.forEach(value => {
    //   this.nameFormArray.push(new FormGroup({}));
    // });
  }
}
