import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, OnChanges {
  nameFormGroup: FormGroup;

  @Input() name: { firstname: string, lastname: string };
  @Input() nameFormArray: FormArray;
  @Input() isValidationRequired: boolean;

  constructor() {
  }

  ngOnInit() {
    this.nameFormGroup = new FormGroup({
      firstname: new FormControl(this.name.firstname, Validators.required),
      lastname: new FormControl(this.name.lastname, Validators.required)
    });

    this.nameFormArray.push(this.nameFormGroup.get('firstname'));
    this.nameFormArray.push(this.nameFormGroup.get('lastname'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isValidationRequired) {
      this.setValidation();
    } else {
      this.removeValidation();
    }
    this.updateValidation();
  }

  setValidation() {
    if (this.nameFormGroup) {
      this.nameFormGroup.controls.firstname.setValidators(Validators.required);
      this.nameFormGroup.controls.lastname.setValidators(Validators.required);
    }
  }

  removeValidation() {
    if (this.nameFormGroup) {
      this.nameFormGroup.controls.firstname.setValidators(null);
      this.nameFormGroup.controls.lastname.setValidators(null);
    }
  }

  updateValidation() {
    if (this.nameFormGroup) {
      this.nameFormGroup.controls.firstname.updateValueAndValidity();
      this.nameFormGroup.controls.lastname.updateValueAndValidity();
    }
  }
}
