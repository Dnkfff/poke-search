import { useQuery } from "@tanstack/react-query";
import { PokemonsResponseResults } from "../@types/api";
//import { useEffect } from "react";
import { pokemonApi } from "../api";
import PokemonCard from "../components/PokemonCard";

const Home: React.FC<{}> = () => {

    //useQuery(["key", id, bankAccountInformation, quota], () => quotaReservationRefundServiceBankAccount(id, bankAccountInformation, quota))


    const pokemons = useQuery(["pokemons"], () => {
        return pokemonApi.getPokemons();
    });

    if (pokemons.isLoading) {
        return <div>Loading</div>;
    }
    console.log(pokemons.data)

    return (
        <div>
            <h1>Home</h1>

            <div className="grid grid-cols-4 gap-8">
                {pokemons.data?.data.results.map((pokemon: PokemonsResponseResults) => (
                   <PokemonCard name={pokemon.name} />
                ))}
            </div>
        </div>
    );
}

export default Home;