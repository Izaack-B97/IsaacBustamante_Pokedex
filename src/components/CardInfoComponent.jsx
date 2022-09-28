import React, { useEffect, useState } from 'react'
import { usePokemon } from '../hooks/usePokemon'
import { ButtonComponent } from './ButtonComponent'

export const CardInfoComponent = ( { pokemon, siguientesPokemos = () => {} } ) => {
  // console.log( pokemon )
  
  const [ sprites, setSprites ] = useState( [] );
  const [ moreDetails, setMoreDetails ] = useState( {} );
  
  const { pokemon : pokemonDetails, isLoading } = usePokemon( pokemon ? pokemon.id : {} );

  const mapSprites = () => {
    const sprites = pokemonDetails.sprites;
    const spritesArr = [];
    // console.log( sprites );
    for ( let key in sprites ) {
      if ( typeof sprites[ key ] === 'string' ) {
        spritesArr.push( sprites[ key ] );
      }      
    }

    setSprites( spritesArr );
  }
  
  const mapMoreDetails = () => {
    const types = pokemonDetails.types.map( ({ type }) => type.name);
    const moves = pokemonDetails.moves.map(({ move }) => move.name);

    setMoreDetails({ types, moves });
  }

  useEffect(() => {
    if ( Object.keys( pokemonDetails ).length > 0 ) {
      
      console.log( pokemonDetails )

      mapSprites();
      mapMoreDetails();

    }
  }, [ pokemonDetails ]);

  return (
    <div className='box2'>
      <div className='card-pokemon-info'>
        <div className='header-card-info'>
          <div className='card-pokemon-info-container'>
            { pokemon && <img src={ pokemon.picture } alt={ pokemon.name } /> }
          </div>
          { pokemon && <>
              <p># { pokemon.id }  </p>
              <p id='parrafo-name'>{ pokemon.name } </p>
            </> 
          }
        </div>
        <div className='details-pokemon'>
          <div>
            <h5>Types</h5>
            { Object.keys( moreDetails ).length > 0 && <span>{ moreDetails['types'].join(', ') }</span> }
          </div>
          <div>
            <h5>Peso</h5>
            <span>{ pokemonDetails.weight }kg</span>
          </div>
          <div>
            <h5>Sprites</h5>
            <div className='sprites-container'>
              { sprites.map(url => <img  key={url} src={ url } alt={ url } />) }
            </div>
          </div>
          <div>
            <h5>Movimientos</h5>
            { Object.keys( moreDetails ).length > 0 && <span>{ moreDetails['moves'].join(', ') }</span> }
          </div>
        </div>
      </div>
      <div className='buttons-container2'>
        <ButtonComponent text='Siguiente >' style={{ marginTop: '5px' }} handleClick={ siguientesPokemos } />
      </div>
    </div>
  )
}
