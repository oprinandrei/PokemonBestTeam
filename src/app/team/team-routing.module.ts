import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamOverviewComponent } from './team-overview/team-overview.component';

const routes: Routes = [
  {
    path: '',
    component: TeamOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
