import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, OnChanges {

  nameFormGroup: FormGroup;

  @Input() name: { firstname: string, lastname: string };
  @Input() index: number;
  @Input() parentFormGroup: FormGroup;
  @Input() isValidationRequired: boolean;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.nameFormGroup = this.buildForm();
    this.updateValidation();
    setTimeout(() => {
      this.parentFormGroup.addControl(`name${this.index}`, this.nameFormGroup);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateValidation();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      firstname: [{
        value: this.name ? this.name.firstname : null,
        disabled: false
      }],
      lastname: [{
        value: this.name ? this.name.lastname : null,
        disabled: false
      }]
    });
  }

  updateValidation() {
    if (this.isValidationRequired) {
      this.setValidation();
    } else {
      this.removeValidation();
    }
    setTimeout(() => {
      this.updateValueAndValidity();
    });
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

  updateValueAndValidity() {
    if (this.nameFormGroup) {
      this.nameFormGroup.controls.firstname.updateValueAndValidity();
      this.nameFormGroup.controls.lastname.updateValueAndValidity();
    }
  }
}
