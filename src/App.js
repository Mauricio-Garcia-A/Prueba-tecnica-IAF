import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Paginas/Home/Home';
import SeccionDetalles from './Paginas/SeccionDetalles/SeccionDetalles';
import SeccionRolUsuario from './Paginas/SeccionRolUsuario/SeccionRolUsuario';

function App() {
  return (
    <div >
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prueba-tecnica-IAF" element={<Home />} />
            <Route path="/:id" element={<SeccionRolUsuario />} />
            <Route path="/:id/:opcion" element={ <SeccionDetalles /> } />
            <Route path="*" element={ <div>ERROR</div>} />
      </Routes>
    </div>
  );
}

export default App;
