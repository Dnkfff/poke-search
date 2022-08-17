import { PokemonsResponse, PokemonResponse } from "../@types/api";
import client from "./client";

const getPokemons = async (): Promise<PokemonsResponse> => client.get("/pokemon");

const getPokemon = async (name:string): Promise<PokemonResponse> => client.get(`/pokemon/${name}`);

const pokemonApi =  {
    getPokemon,
    getPokemons,
    
};

export default pokemonApi;