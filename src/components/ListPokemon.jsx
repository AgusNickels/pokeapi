import { useState, useEffect } from 'react';

export function ListPokemon() {
    
    const [data, setData] = useState({});

    let offset = 40;
    const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=" + offset;

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let previousData = await response.json();;
        
        setData(previousData);
}

useEffect (() => {
    CallAPI();
}, []);

return(
    <section id="list">
    { Object.keys(data).length > 0 &&
        data.results.map((pkmon, i) => {

            let id = offset + 1 + i;
            let idstr = id.toString().padStart(3, '0');

            let img = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/" + idstr + ".png";

            return(
                <div key={pkmon.name}>
                    <img sytle={{widt:400}} src={img}/>
                    <p>{idstr}: {pkmon.name}</p>
                </div>
            )})
        }
        </section>
    )
}