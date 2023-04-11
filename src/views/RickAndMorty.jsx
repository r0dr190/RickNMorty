import React from 'react';
import { useState , useEffect } from 'react';


function RickAndMorty() {

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
        const dibujos = character.results.map((dibujo) => {

            return {

                id: dibujo.id,
                name: dibujo.name,
                status: dibujo.status,
                species: dibujo.species,
                gender: dibujo.gender,
                image: dibujo.image

                /* id: dibujo.results.id,
                name: dibujo.results.name,
                status: dibujo.results.status,
                species: dibujo.results.species,
                gender: dibujo.results.gender,
                image: dibujo.results.image */
            };
        });

        setPersonajes(dibujos);
    };

    return (
        <div>
            {
                personajes.map((personaje) => {
                
                    return(
                        <div id='cards' className='cards row col-4 mt-2 ms-0 me-0'>
                            <div className="card bg-secondary " key={personaje.id}>
                                <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                                <div className="card-body text-white">
                                    <h5 className="card-title text-center">{personaje.name}</h5>
                                    <p className="card-text m-0">Estatus: {personaje.status}</p>
                                    <p className="card-text m-0">Especie: {personaje.species}</p>
                                    <p className="card-text mt-0">Género: {personaje.gender}</p>
                                    <a href={personaje.image} className="btn btn-primary">url imagen</a>
                                </div>
                            </div>
                        </div>                        
                    )
                })
            }
        </div>
    )
}

export default RickAndMorty;
