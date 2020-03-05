import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

const resolvedPromise = Promise.resolve(null);

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
    this.parentFormGroup = new FormGroup({
    });
  }

  onClicked() {
    console.log(this.state);
  }

  onToggleValidationClicked() {
    this.isValidationRequired = !this.isValidationRequired;
  }

  isInvalid() {
    // if (this.parentFormGroup) {
    //   this.parentFormGroup.updateValueAndValidity();
    //   return this.parentFormGroup.invalid;
    // }
  }
}
