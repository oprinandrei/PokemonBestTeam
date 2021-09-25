import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PkmApiService } from 'src/app/shared/services/pkm-api.service';

@Component({
  selector: 'pbt-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.scss']
})
export class SelectedPokemonComponent implements OnInit {
  @Input() set selectedPokemon(pokemon: Pokemon) {
    if (pokemon.name.length) {
      this.pkmApiService.getPokemon(pokemon.name.toLowerCase()).subscribe(pokemon => this.pokemonData = pokemon);
    }
  };
  pokemonData: any;

  constructor(private pkmApiService: PkmApiService) { }

  ngOnInit(): void { }


}
