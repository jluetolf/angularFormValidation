import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit, OnChanges {
  addressFormGroup: FormGroup;

  @Input() address: { street: string, city: string };
  @Input() addressFormArray: FormArray;
  @Input() isValidationRequired: boolean;

  constructor() {
  }

  ngOnInit() {
    this.addressFormGroup = new FormGroup({
      street: new FormControl(this.address.street, Validators.required),
      city: new FormControl(this.address.city, Validators.required)
    });

    this.addressFormArray.push(this.addressFormGroup.get('street'));
    this.addressFormArray.push(this.addressFormGroup.get('city'));
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
    if (this.addressFormGroup) {
      this.addressFormGroup.controls.street.setValidators(Validators.required);
      this.addressFormGroup.controls.city.setValidators(Validators.required);
    }
  }

  removeValidation() {
    if (this.addressFormGroup) {
      this.addressFormGroup.controls.street.setValidators(null);
      this.addressFormGroup.controls.city.setValidators(null);
    }
  }

  updateValidation() {
    if (this.addressFormGroup) {
      this.addressFormGroup.controls.street.updateValueAndValidity();
      this.addressFormGroup.controls.city.updateValueAndValidity();
    }
  }
}
