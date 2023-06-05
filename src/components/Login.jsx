import { useContext } from 'react';
import Form from './Form';
import { Infos } from '../context/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    console.log('Recarregou Login');
  });
  const { loading, setInfo, ...rest } = useContext(Infos);
  const navigate = useNavigate();
  const login = (info) => {
    console.log('login', info);
    setInfo({ ...rest, loading: true });

    axios.post(`/auth/login`, info)
      .then(({ data }) => {
        localStorage.setItem('user', JSON.stringify({...data}));
        setInfo({ ...rest, loading: false, user: data});
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        navigate('/hoje');
      })
      .catch((error) => {
        console.log(error);
        setInfo({ ...rest, loading: false });
        alert(error.response.data.message ? error.response.data.message : error.message);
      }); // prettier-ignore
  };
  return <Form signup={false} submit={login} />;
}
