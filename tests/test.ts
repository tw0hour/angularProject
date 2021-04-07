import {whichPokemonAttack} from "../src";
import {Pokemon} from "../src/pokemon";

describe("Test pokemon fight",() => {

    test("should return the fatest pokemon (piiiiika)",() => {
        const p1 = new Pokemon("piiiiika",85);
        const p2 = new Pokemon("bibul",96);

        expect(whichPokemonAttack(p1,p2)).toBe(p2);
    });
});

