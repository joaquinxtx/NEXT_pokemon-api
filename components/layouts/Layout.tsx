import Head from "next/head"

import * as React from 'react';
import { NavBar } from '../ui';

type Props = {
    children?: React.ReactNode
    title?:string
  };

export const Layout: React.FC<Props>= ({children,title}) => {
  return (
    <>
    <Head>
        <title>{ title || 'pokemon app' }</title>
        <meta name="author" content="Joaquin Toledo " />
        <meta name="description" content={`informacion del pokemon ${title}`} />
        <meta name="keywords" content={`${title},pokemon,pokedex`} />

    </Head>
    <NavBar/>
    {/* navar */}

    <main style={{
        padding:'10px 100px'
    }}>
        {children}
    </main>
    </>
  )
}
