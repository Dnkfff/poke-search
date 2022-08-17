import { useQuery } from "@tanstack/react-query";
import { pokemonApi } from "../api";
import { Link } from "react-router-dom";

type PokemonCardProps = {
    name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {

    const pokemon = useQuery(["pokemon", name], () =>
     pokemonApi.getPokemon(name)
    );

    if(pokemon.isLoading) {
        return <div>Loading</div>
    }

    return (
        <Link 
        to="" 
        className="group bg-gray-50 border border-gray-100 rounded-lg p-4 transition transform space-y-8 hover:shadow hover:scale-105">
          <div className="w-full h-56 flex justify-center">
            <img 
              className="w-full h-full object-contain"
              src={pokemon.data?.data.sprites.other.dream_world.front_default} 
              alt={pokemon.data?.data.name}
            />
          </div>
          <div className="font-medium capitalize text-gray-400 group-hover:text-gray-700">{pokemon.data?.data.name}</div>
        </Link>
    )

};

export default PokemonCard;