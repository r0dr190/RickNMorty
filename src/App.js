import React from 'react'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Componente from './components/Componente';
import SegundoComponente from './components/SegundoComponente';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Planes from './views/Planes';
import Home from './views/Home';
import RickAndMorty from './views/RickAndMorty';
import './Index.css';

function App() {
  return (
    <div className='container'>
      < BrowserRouter>
      < Componente />
        < Routes >
          < Route path='/' element={< Home />} />
          < Route path='/Planes' element={< Planes />} />
          < Route path='/RickAndMorty' element={< RickAndMorty />} />
        </Routes>
        {/* < SegundoComponente /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
