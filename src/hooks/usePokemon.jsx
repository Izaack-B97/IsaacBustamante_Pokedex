import { useEffect, useState } from "react"
import { PokemonApi } from "../api/PokemonApi";


export const usePokemon = ( id ) => {
    const [ isLoading, setIsLoading ] = useState( true );
    const [ pokemon, setPokemon ] = useState( {} );

    const loadPokemon = async () => {
        const resp = await PokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        // console.log( resp.data );
        setPokemon( resp.data );
        setIsLoading( false );
    }

    useEffect(() => {
        console.log( id );
        if ( id !== null && id !== {}) loadPokemon();
    }, [ id ]);

    return { isLoading, pokemon }
}
