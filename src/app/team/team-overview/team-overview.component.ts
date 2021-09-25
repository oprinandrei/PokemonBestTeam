import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { PokemonList } from 'src/assets/pokemon-list';

export interface Pokemon {
  name: string;
}
@Component({
  selector: 'pbt-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();
  options: Pokemon[] = [];
  // Definite Assignment Assertions - view typescript 2.7 release notes
  filteredOptions!: Observable<Pokemon[]>;

  ngOnInit() {
    PokemonList.forEach(pokemon => {
      console.log(pokemon.name.english)
      const { english: name } = pokemon.name;
      this.options.push({ name });
    })

    // React to input value change to filter options
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  /* 
    Used to display pokemon names in input autocomplete box
  */
  displayFn(pokemon: Pokemon): string {
    return pokemon && pokemon.name ? pokemon.name : '';
  }

  /* 
    Filter the pokemons in the select list based on user input
  */
  private _filter(name: string): Pokemon[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
