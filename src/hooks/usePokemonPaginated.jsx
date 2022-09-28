import { useEffect, useRef, useState } from "react";
import { PokemonApi } from "../api/PokemonApi";


export const usePokemonPaginated = () => {
    const base_url = 'https://pokeapi.co/api/v2/pokemon?limit=4';

    const [ isLoading, setIsLoading ] = useState( false );
    const [ simplePokemonList, setSimplePokemonList ] = useState([]);
    
    const nextPageUrl = useRef( base_url );

    const loadPokemons = async ( previous = false, search_active = false ) => {
        try {

            setIsLoading( true );
            const { data } = await PokemonApi.get( nextPageUrl.current );
            console.log( data.results );

            console.log({ previous, search_active });

            if ( previous ) nextPageUrl.current = data.previous;
            else if ( !previous ) nextPageUrl.current = data.next;

            mapPokemonList( data.results );
            // console.log( data.results );
        } catch (error) {
            console.log( error );
        }
    }

    const mapPokemonList = ( pokemonList = [] ) => {
        
        const newPokemonList = pokemonList.map( ({ name, url }) => {
            const urlsParts = url.split('/')
            const id = urlsParts[ urlsParts.length - 2 ]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
            
            return { name, picture, id }
        })
        
        setSimplePokemonList( newPokemonList );
        setIsLoading( false );
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isLoading,
        simplePokemonList,
        loadPokemons,
        setSimplePokemonList
    }
}
