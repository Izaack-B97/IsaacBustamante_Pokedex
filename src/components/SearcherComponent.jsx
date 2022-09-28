import React from 'react'

export const SearcherComponent = ({ handleFocus = () => {}, onQueryChanged = () => {} }) => {

  return (
    <div id='SearcherComponent'>
        <div className='search-container'>
            <img src={require('../assets/search-svgrepo-com.svg').default} alt='mySvgImage' />
            <input name='search-input' placeholder='Buscar' onChange={ onQueryChanged } onFocus={ handleFocus } />
        </div>
    </div>
  )
}
