import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameComponent } from './formarray/name/name.component';
import { AddressComponent } from './formarray/address/address.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormarrayComponent } from './formarray/formarray.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AddressComponent,
    FormarrayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
