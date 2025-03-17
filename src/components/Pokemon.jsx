import { Link, useParams } from 'react-router-dom';

export function Pokemon() {
    const { name } = useParams(); // Obtiene el nombre del Pokémon desde la URL

    return (
        <>
            <h1>Detalles de {name}</h1>
            <Link to="/">Volver</Link>
        </>
    );
}
