import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { SelectedPokemonComponent } from './selected-pokemon/selected-pokemon.component';

import { TeamRoutingModule } from './team-routing.module';

import { PkmApiService } from '../shared/services/pkm-api.service';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    TeamOverviewComponent,
    SelectedPokemonComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [PkmApiService]
})
export class TeamModule { }
