import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit, OnChanges {

  addressFormGroup: FormGroup;

  @Input() address: { street: string, city: string };
  @Input() parentFormGroup: FormGroup;
  @Input() isValidationRequired: boolean;

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addressFormGroup = this.buildForm();
    this.parentFormGroup.addControl('address', this.addressFormGroup);
    this.updateValidation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateValidation();
  }

  buildForm(): FormGroup {
    return this.formbuilder.group({

      street: [{
        value: this.address ? this.address.street : null,
        disabled: false
      }, Validators.compose([Validators.required, Validators.min(1)])],
      city: [{
        value: this.address ? this.address.city : null,
        disabled: false
      }, Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  updateValidation() {
    if (this.isValidationRequired) {
      this.setValidation();
    } else {
      this.removeValidation();
    }
    this.updateValueAndValidity();
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

  updateValueAndValidity() {
    if (this.addressFormGroup) {
      this.addressFormGroup.controls.street.updateValueAndValidity();
      this.addressFormGroup.controls.city.updateValueAndValidity();
    }
  }
}
