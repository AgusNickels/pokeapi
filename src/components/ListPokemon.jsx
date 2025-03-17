import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export function ListPokemon() {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);

    const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();
            setData(prevData => [...prevData, ...result.results]);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }, [API_URL]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const loadMore = () => setOffset(prevOffset => prevOffset + 20);
    const loadLess = () => setData(data.slice(0, 20));

    return (
        <>
            <section id="list">
                {data.length > 0 && data.map((pkmon, i) => {
                    const id = (i + 1).toString().padStart(3, '0');
                    const img = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${id}.png`;

                    return (
                        <div key={pkmon.name}>
                            <img src={img} alt={pkmon.name} />
                            <p>{id}</p>
                            <h2>{pkmon.name}</h2>
                            <Link to={`/pokemon/${pkmon.name}`}>Ver más</Link>
                        </div>
                    );
                })}
            </section>
            <div className="center-obj">
                <button onClick={loadLess} className="button-center secondary">Cargar menos</button>
                <button onClick={loadMore} className="button-center primary">Cargar más</button>
            </div>
        </>
    );
}
