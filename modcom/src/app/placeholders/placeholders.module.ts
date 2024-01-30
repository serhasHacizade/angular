import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceHoldersComponent } from './place-holders/place-holders.component';


@NgModule({
  declarations: [
    PlaceholdersHomeComponent,
    PlaceHoldersComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule
  ],
  exports: [
    // PlaceholdersHomeComponent
  ]
})
export class PlaceholdersModule { }
