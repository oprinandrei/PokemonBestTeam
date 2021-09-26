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
import { MatIconModule } from '@angular/material/icon';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    TeamOverviewComponent,
    SelectedPokemonComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  providers: [PkmApiService]
})
export class TeamModule { }
