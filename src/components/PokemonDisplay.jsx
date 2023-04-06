import React from 'react'

export default function PokemonDisplay({ pokemonInfo }) {
  return (
    <div className='card my-2'>
        <div className='card-body form-control'>
            <h1 className='card-tittle'>{pokemonInfo.name}</h1>
            <p className='card-text'>Height: {pokemonInfo.height}</p>
            <p className='card-text'>Weight: {pokemonInfo.weight}</p>
        </div>
    </div>
  )
}
