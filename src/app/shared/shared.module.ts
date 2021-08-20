import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmApiService } from './services/pkm-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PkmApiService
  ]
})
export class SharedModule { }
