import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address1',
  templateUrl: './address1.component.html',
  styleUrls: ['./address1.component.css']
})
export class Address1Component implements OnInit, OnChanges {
  addressFormGroup: FormGroup;

  @Input() address: { street: string, city: string };
  @Input() isValidationRequired: boolean;
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.addressFormGroup = new FormGroup({
      street: new FormControl(this.address.street, Validators.required),
      city: new FormControl(this.address.city, Validators.required)
    });
    this.addressFormGroup.statusChanges.subscribe(value => this.isValid.emit(value === 'VALID'));
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
