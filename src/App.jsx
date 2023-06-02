import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HabitsPage from './pages/Habits';
import Register from './pages/Register';
import Today from './pages/Today';
import History from './pages/History';
import { Normalize } from './styles';
import { InputsDesabled } from './context/desabled';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Normalize />
      <BrowserRouter>
        <InputsDesabled.Provider value={{ loading, setLoading }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </InputsDesabled.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
