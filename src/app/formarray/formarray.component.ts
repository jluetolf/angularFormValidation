import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {

  state = {names: [{firstname: 'Joerg', lastname: 'Luetolf'}, {firstname: 'Anton', lastname: 'Müller'}], address: {street: 'Spiegelstr', city: 'Bern'}};
  isValidationRequired = true;

  parentFormGroup: FormGroup;

  ngOnInit(): void {
    const fomg = FormGroup[2];
    fomg[0] = new FormGroup({});
    fomg[1] = new FormGroup({});
    this.parentFormGroup = new FormGroup({
      name: new FormArray(fomg),
      address: new FormArray([])
    });
  }

  onClicked() {
    console.log(this.state);
  }

  onToggleValidationClicked() {
    this.isValidationRequired = !this.isValidationRequired;
  }
}
