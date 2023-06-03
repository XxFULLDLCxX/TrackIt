import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HabitsPage from './pages/Habits';
import Register from './pages/Register';
import Today from './pages/Today';
import History from './pages/History';
import { Normalize } from './styles';
import { Infos } from './context/core';

function App() {
  const [info, setInfo] = useState({ loading: false, user: {} });

  return (
    <>
      <Normalize />
      <BrowserRouter>
        <Infos.Provider value={{ ...info, setInfo }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </Infos.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
