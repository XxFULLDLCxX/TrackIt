import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import HabitsPage from './pages/Habits';
import Register from './pages/Register';
import Today from './pages/Today';
import History from './pages/History';
import { Normalize } from './styles';
import { Infos } from './context/core';
import { useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

console.log('Recarregou... APP');

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [info, setInfo] = useState({ loading: false, user, percentage: 0 });
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Recarregou... Today');

    if (user) {
      axios
        .post(`/auth/login`, { email: user.email, password: user.password })
        .then(({ data }) => {
          localStorage.setItem('user', JSON.stringify({ ...data }));
          setInfo({ ...info, user: data });
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
          navigate('/hoje');
        })
        .catch((error) => {
          console.log(error);
          console.log(user, 'APP');
          // alert(error.response.data.message ? error.response.data.message : error.message);
        });
      console.log('ue');
    }
  }, []);
  return (
    <>
      <Normalize />
      <Infos.Provider value={{ ...info, setInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </Infos.Provider>
    </>
  );
}

export default App;
