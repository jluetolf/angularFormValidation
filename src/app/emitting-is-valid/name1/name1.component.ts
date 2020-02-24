import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-name1',
  templateUrl: './name1.component.html',
  styleUrls: ['./name1.component.css']
})
export class Name1Component implements OnInit, OnChanges {
  nameFormGroup: FormGroup;

  @Input() name: { firstname: string, lastname: string };
  @Input() isValidationRequired: boolean;
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.nameFormGroup = new FormGroup({
      firstname: new FormControl(this.name.firstname, Validators.required),
      lastname: new FormControl(this.name.lastname, Validators.required)
    });
    this.nameFormGroup.statusChanges.subscribe(value => this.isValid.emit(value === 'VALID'));
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
