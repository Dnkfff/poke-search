import { useQuery } from "@tanstack/react-query";
//import { useEffect } from "react";
import { pokemonApi } from "../api";

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

            {pokemons.data?.data.results.map((pokemon:any) => (
                <div>{pokemon.name}</div>
            ))}
        </div>
    );
}

export default Home;