import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Paginas/Home/Home';
import SeccionDetalles from './Paginas/SeccionDetalles/SeccionDetalles';
import SeccionPaciente from './Paginas/SeccionPaciente/SeccionPaciente';

function App() {
  return (
    <div >
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SeccionPaciente />} />
            <Route path="/:id/:opcion" element={ <SeccionDetalles /> } />
            <Route path="*" element={ <div>ERROR</div>} />
      </Routes>
    </div>
  );
}

export default App;
