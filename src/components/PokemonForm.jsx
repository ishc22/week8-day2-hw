import React from 'react'

export default function PokemonForm({updatePokemon}) {
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target.pokemon_name.value)
        const pokemonName = event.target.pokemon_name.value 
        updatePokemon(pokemonName)
        event.target.pokemon_name.value = ''
    }


  return (
    <div>
        <form action="" onSubmit={handleFormSubmit}>
                <div className="form-">
                    <input className='form-control' type="text" name="pokemon_name" placeholder="Enter Pokemon Name:"/>
                    <input className='form-control bg-warning my-2' type="submit" value="Submit"/>
                </div>
         </form>
    </div>
  )
}
