import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EqualityComponent } from './equality/equality.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EqualityValidatorsComponent } from './equality-validators/equality-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    EqualityComponent,
    EqualityValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
