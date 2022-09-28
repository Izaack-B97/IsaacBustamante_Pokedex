import React, { useRef, useState } from 'react'

import { BoxComponent } from './BoxComponent'
import { CardInfoComponent } from './CardInfoComponent'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const SectionPokemonsComponent = () => {
  
  const [ pokemonSelected, setPokemonSelected ] = useState(null);
  
  const { simplePokemonList, loadPokemons, setSimplePokemonList } = usePokemonPaginated();

  const debounceRef = useRef();

  const onClickCard =  ( pokemon ) => {
    // console.log( pokemon );
    setPokemonSelected( pokemon );
  }

  const siguientesPokemons = () => {
    loadPokemons();
  }

  const anterioresPokemons = () => {
    loadPokemons( true );
  }

  const onQueryChanged = ( event ) => {
    if ( debounceRef.current ) clearTimeout(  debounceRef.current );

    debounceRef.current = setTimeout(() => {

      if ( event.target.value.length > 0 ) {
        console.log( 'debounced value:', event.target.value );

        const newArr = simplePokemonList.filter( pokemon => pokemon.name.includes( event.target.value ) );
        console.log( newArr );
        setSimplePokemonList( newArr );
      } else {
        loadPokemons( false, true );
      }
    }, 350);
  }

  const handleFocus = () => {
    // loadPokemons( false, 1154); // All Pokemxons
    // console.log( simplePokemonList );

  }

  return (
    <div>
      <div>
        <div className='section'>
          <BoxComponent
            onClickCard={ onClickCard }  
            simplePokemonsList={ simplePokemonList } 
            anterioresPokemons={ anterioresPokemons }
            handleFocus={ handleFocus }
            onQueryChanged={ onQueryChanged }
          />
          <CardInfoComponent pokemon={ pokemonSelected } siguientesPokemos={ siguientesPokemons } />
        </div>
      {/* Buttons Section */}
        {/* <div className='buttons-container'>
            <ButtonComponent style={{ 'margin-left': '100px' }} />
            
        </div> */}
      </div>
    </div>
  )
}
