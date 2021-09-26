import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'pbt-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() selectedPokemons: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  removePokemonFromList(index: number) {
    this.selectedPokemons.splice(index, 1);
  }
}
