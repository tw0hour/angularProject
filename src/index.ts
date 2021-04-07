import {Pokemon} from "./pokemon";

const pokemon1 = new Pokemon("pikachu",45);
const pokemon2 = new Pokemon("carapuce",15);

export function whichPokemonAttack(pokemon1:Pokemon, pokemon2:Pokemon):Pokemon{

    if(pokemon1.speed>pokemon2.speed){
        return pokemon1;
    }
    return pokemon2;
}