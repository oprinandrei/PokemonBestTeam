import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamOverviewComponent } from './team-overview/team-overview.component';

import { TeamRoutingModule } from './team-routing.module';

import { PkmApiService } from '../shared/services/pkm-api.service';

@NgModule({
  declarations: [
    TeamOverviewComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ],
  providers: [PkmApiService]
})
export class TeamModule { }
