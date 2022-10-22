import React, { useState } from "react";
import { Navbar, useTheme, Text, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink  from "next/link";

export const NavBar = () => {
  const [variant, setVariant] = useState("default");
  const [activeColor, setActiveColor] = useState("primary");
  const { isDark } = useTheme();

  return (
    <>
      <Navbar
        style={{
          display: "flex",
          width: "100%",
        }}
        isBordered={isDark}
        variant="sticky"
      >
        <Navbar.Brand>
         
          <NextLink href='/' >
            <Link>
              <Text h1 b color="inherit" hideIn="xs">
                Pokemon
              </Text>
            
            </Link>

          </NextLink>
            

            
          
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Link href="/">Inicio</Navbar.Link>
          <Navbar.Link href="/favorite/">Favoritos</Navbar.Link>
          
        </Navbar.Content>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="iconApp"
          width={120}
          height={100}
        />
      </Navbar>
    </>
  );
};
