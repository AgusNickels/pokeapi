import { useState, useEffect } from 'react';

export function ListPokemon() {
    const [data, setData] = useState({});
    const [offset, setOffset] = useState(0); // Definir offset

    const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}`;

    let CallAPI = async () => {
        try {
            let response = await fetch(API_URL);
            let previousData = await response.json();
            
            setData(previousData);
            console.log(previousData);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {
        CallAPI();
    }, [offset]); 

    return (
        <>
            {data.results && data.results.length > 0 && 
                data.results.map((pkmon, i) => {
                    let id = offset + i + 1;

                    return (
                        <div key={pkmon.name}>
                            <p>{pkmon.name}</p>
                        </div>
                    );
                })
            }
        </>
    );
}
