/* import React from 'react';
import { useState , useEffect } from 'react';

export default function RickAndMorty() {

    const [personajes , setPersonajes] = useState([]);

    useEffect(() => {

        document.title= "Rick and Morty";
        getApi();
    }, []);

    const getApi = async() => {

        const url = "https://rickandmortyapi.com/api/character";

        const response = await fetch(url);

        const character = await response.json();

        console.log(character)
        const dibujos = character.map((dibujo) => {

            return {

                id: dibujo.id,
                name: dibujo.name,
                status: dibujo.status,
                species: dibujo.species,
                gender: dibujo.gender,
                image: dibujo.image
            };
        });

        setPersonajes(dibujos);
    };

    return (
        <div>
            {
                personajes.map((personaje) => {
                
                    return(

                        <div key={personaje.id}>
                            <div><p>{personaje.id}</p></div>
                            <div><p>{personaje.name}</p></div>
                            <div><p>{personaje.status}</p></div>
                            <div><p>{personaje.species}</p></div>
                            <div><p>{personaje.gender}</p></div>
                            <div><p>{personaje.image}</p></div>
                        </div>
                    )
                })
            }
        </div>
    )
} */
