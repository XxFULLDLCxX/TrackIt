import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Habits from './pages/Habits';
import Register from './pages/Register';
import Today from './pages/Today';
import History from './pages/History';
import { Normalize } from './styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Normalize />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
