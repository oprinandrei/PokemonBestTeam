import { Component, OnInit } from '@angular/core';
import { PkmApiService } from '../../shared/services/pkm-api.service';

@Component({
  selector: 'pbt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private pkm: PkmApiService) { }

  ngOnInit(): void {
    this.pkm.getPokemon('ditto').subscribe(val => console.log(val))
  }

}
