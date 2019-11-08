import { Injectable } from '@angular/core';
// import http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // Then make attribute of the class
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getPokemonabilities();
    // this.getShare();

    this.getPokemonBulbasaur();
  }
  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Bulbasaur", data));
  }

  getPokemonabilities() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log("Bulbasaur Abilities")
      let abi = "";
      for (let i of data['abilities']) {
        for (let j of [i]) {
          abi += j['ability']['name'] + ", ";
        }
      }
      console.log(abi);
    }
    );
  }

  getPokemonBulbasaur() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe((data: any) => {

      for (let i = 0; i < data['abilities'].length; i++) {
        // console.log(data.name + "'s " + data.abilities[0].ability.name + " and " + data.abilities[i].ability.name + ".")
        this.getNumber(data.abilities[i].ability.url);
      }
    });
  };

  getNumber(url) {
    let overgrow = this._http.get(url);
    overgrow.subscribe((data: any) => {
      // console.log(data),
      console.log(data.pokemon.length + " Pokemon have the " + data.name + " ability.");
    });
  };

}
