import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {
  @Input() names: [{ firstname: string, lastname: string }];
  @Input() parentFormGroup: FormGroup;
  @Input() isValidationRequired: boolean;

  onAddNameComponent() {
    this.names.push({firstname: null, lastname: null});
  }

  onRemoveNameComponent() {
    this.names.pop();
  }
}
