import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-emitting-is-valid',
  templateUrl: './emitting-is-valid.component.html',
  styleUrls: ['./emitting-is-valid.component.css']
})
export class EmittingIsValidComponent implements OnInit {

  state = {name: {firstname: null, lastname: 'Luetolf'}, address: {street: 'Spiegelstr', city: 'Bern'}};
  isValidationRequired = true;
  validArray: Map<string, boolean> = new Map<string, boolean>();

  ngOnInit(): void {
  }

  onClicked() {
    console.log(this.state);
  }

  onToggleValidationClicked() {
    this.isValidationRequired = !this.isValidationRequired;
  }

  onIsValidName(isValid: boolean) {
    //this.validArray.set('name', isValid);
    setTimeout(() => this.validArray.set('name', isValid));

  }

  onIsValidAddress(isValid: boolean) {
    //this.validArray.set('address', isValid);
    setTimeout(() => this.validArray.set('address', isValid));
  }

  areComponentsInvalid() {
    return Array.from(this.validArray.values()).includes(false);
  }
}
