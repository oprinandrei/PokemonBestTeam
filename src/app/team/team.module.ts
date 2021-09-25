import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamOverviewComponent } from './team-overview/team-overview.component';

import { TeamRoutingModule } from './team-routing.module';

import { PkmApiService } from '../shared/services/pkm-api.service';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    TeamOverviewComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [PkmApiService]
})
export class TeamModule { }
