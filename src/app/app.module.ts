import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NameComponent} from './formarray/name/name.component';
import {AddressComponent} from './formarray/address/address.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormarrayComponent} from './formarray/formarray.component';
import {EmittingIsValidComponent} from './emitting-is-valid/emitting-is-valid.component';
import {Name1Component} from './emitting-is-valid/name1/name1.component';
import {Address1Component} from './emitting-is-valid/address1/address1.component';
import {NamesComponent} from './formarray/names/names.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AddressComponent,
    FormarrayComponent,
    EmittingIsValidComponent,
    Name1Component,
    Address1Component,
    NamesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TabViewModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
