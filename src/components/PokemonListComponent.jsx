import React from 'react'

import { ButtonComponent } from './ButtonComponent'

export const PokemonListComponent = ({ onClickCard = () => {}, simplePokemonList = [], anterioresPokemons = () => {} }) => {

  return (
    <div>
        <div className='list-container'>
        {
          simplePokemonList.map( pokemon => (
            <div key={ pokemon.name } className='card' onClick={ () => onClickCard( pokemon ) }>
              <div className='img-container'>
                <img src={ pokemon.picture } alt={ pokemon.name }/>
              </div>
              <h5># { pokemon.id }</h5>
              <p># { pokemon.name }</p>
            </div>         
          ))
        }
        </div>
        <div className='buttons-container'>
            <ButtonComponent text='< Atras' handleClick={ anterioresPokemons } style={{ marginLeft: '10px' }}/>
        </div>
    </div>
  )
}
