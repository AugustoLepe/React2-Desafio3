import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Personaje from './views/Personaje';
import NotFound from './views/NotFound';
import ContextProvider from './context/MyContext';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/personaje/:name" element={<Personaje />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
