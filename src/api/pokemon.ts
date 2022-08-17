import { PokemonsResponse } from "../@types/api";
import client from "./client";

const getPokemons = async (): Promise<PokemonsResponse> => client.get("/pokemon");

const pokemonApi =  {
    getPokemons,
};

export default pokemonApi;