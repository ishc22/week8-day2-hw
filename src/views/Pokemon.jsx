import React, {useState, useEffect} from 'react'
import PokemonDisplay from '../components/PokemonDisplay';
import PokemonForm from '../components/PokemonForm'


export default function Pokemon() {
  
  const [pokemonSelected, setPokemonSelected] = useState();
  const [pokemonObject, setPokemonObject] = useState({});
 
  useEffect(() => {
      async function fetchData(){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected.toLowerCase()}`)
        let data = await response.json();
        //console.log(data)
        setPokemonObject(data);
      }
      fetchData();
  }, [pokemonSelected]);


  // function updatePokemon (newPokemonSelected){
  //     setPokemonSelected(newPokemonSelected);
  // }

  return (
    <div className='bg-danger'>
      <h1 className='text-center'>Pokemon Stats  {pokemonSelected}</h1>
      <PokemonForm updatePokemon={setPokemonSelected}/>
      <PokemonDisplay pokemonInfo={pokemonObject}/>
    </div>
  )
}
    // --openss1-legacy-provider start
