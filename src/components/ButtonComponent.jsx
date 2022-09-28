import React from 'react'

export const ButtonComponent = ({ text = '' ,style = {}, handleClick = () => {} }) => {

  return (
    <div>
        <button className='btn' type="button" style={ style } onClick={ handleClick } >{ text }</button>
    </div>
  )
}
