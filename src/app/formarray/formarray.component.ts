import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {

  state = {name: {firstname: null, lastname: 'Luetolf'}, address: {street: 'Spiegelstr', city: 'Bern'}};
  isValidationRequired = true;

  parentFormGroup: FormGroup;

  ngOnInit(): void {
    this.parentFormGroup = new FormGroup({
      name: new FormArray([]),
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
