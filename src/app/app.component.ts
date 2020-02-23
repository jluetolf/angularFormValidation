import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state = {name: {firstname: null, lastname: 'Luetolf'}, address: {street: 'Steingrubenweg', city: 'Spiegel'}};

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
}
