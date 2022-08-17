export type PokemonsResponseResults = {
  name: string;
  url: string;
};

export type PokemonsResponse = {
   
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonsResponseResults[];
  };
};

export type PokemonResponse = {
  data: {
    name: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    }
  },
}