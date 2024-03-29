import React from "react";
import { Layout } from "../../components/layouts";

import { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";

import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";
import { Grid, Card, Text, Button, Container,Image } from '@nextui-org/react';


interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "noImage.png"
              }
              alt={pokemon.name}
              width='100%'
              height='250px'
            />
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
            <Card>
                <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
                    <Text h1 transform="capitalize">
                        {pokemon.name}
                    </Text>
                    <Button color='error'>
                        Volver
                    </Button>
                    <Button color='gradient'>
                        Guardar en Favotito
                    </Button>

                </Card.Header>

                <Card.Body>
                    <Text size={30}>Sprites:</Text>

                    <Container display="flex" >
                        <Image src={pokemon.sprites.front_default} alt={pokemon.name}  width={100} height={100} />
                        <Image src={pokemon.sprites.back_default} alt={pokemon.name}  width={100} height={100} />
                        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name}  width={100} height={100} />
                        <Image src={pokemon.sprites.back_shiny} alt={pokemon.name}  width={100} height={100} />
                    </Container>
                </Card.Body>
            
            </Card>

        </Grid>

      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
