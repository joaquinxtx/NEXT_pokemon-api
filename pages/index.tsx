import type { NextPage ,GetStaticProps} from 'next'

import { Layout } from '../components/layouts/';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { Card4 } from '../components/ui/';


interface Props{
  pokemons:SmallPokemon[]
}

const Home: NextPage <Props>= ({pokemons}) => {
  
  
  return (
    <>
    
    <Layout  title='Listado Pokemon'>
     <Grid.Container gap={2} justify='flex-start'>

       
      {
        pokemons.map((poke)=>(
            <Card4 key={poke.id} id={poke.id} name={poke.name} imgPoke={poke.img} />

        ))
      }
          

     </Grid.Container>
        
    </Layout>
    
    </>
  )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data}= await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons:SmallPokemon[] = data.results.map((poke,i)=>({
    ...poke,
    id:i+1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

 
  
  

  return {
    props: {
      pokemons
    }
  }
}

export default Home
