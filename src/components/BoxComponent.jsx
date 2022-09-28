import React from 'react'

import { PokemonListComponent } from './PokemonListComponent'
import { SearcherComponent } from './SearcherComponent'

export const BoxComponent = ({ 
  onClickCard = () => {}, 
  simplePokemonsList = [], 
  anterioresPokemons = () => {} ,
  handleFocus = () => {},
  onQueryChanged = ()=> {}
}) => {

  return (
    <div className='box1'>
        <SearcherComponent handleFocus={ handleFocus } onQueryChanged={ onQueryChanged } />
        <PokemonListComponent  onClickCard={onClickCard} simplePokemonList={ simplePokemonsList } anterioresPokemons={ anterioresPokemons }/>
    </div>
  )
}
