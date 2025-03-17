import { Routes, Route} from 'react-router-dom';
import { Searcher } from './components/Searcher';
import { ListPokemon} from './components/ListPokemon';
import { Pokemon} from './components/Pokemon';
import './style.css';

function App() {

  return (
    <>
      <Searcher />
      <ListPokemon />
    
    <Routes>
      <Route patch="/" element={ <ListPokemon />} />
      <Route patch="/pokemon" element={ <Pokemon />} />
    </Routes>
    </>
  )
}

export default App
