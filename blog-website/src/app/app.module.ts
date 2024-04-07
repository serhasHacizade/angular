import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HomeDialogComponent } from './home/home-dialog/home-dialog.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
