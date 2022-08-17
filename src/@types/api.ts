export type PokemonsResponseResults = {
    name: string;
    url: string;
}

export type PokemonsResponse = {
    
    data: {
        count: number;
        next: string | null;
        previous: string | null;
        results: PokemonsResponseResults[];
    }
    
}