import { useContext } from 'react';
import Form from './Form';
import { Infos } from '../context/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

export default function Login() {
  const { loading, setInfo, ...rest } = useContext(Infos);

  const navigate = useNavigate();
  const login = (info) => {
    console.log('login', info);
    setInfo({ ...rest, loading: true });

    axios.post(`/auth/login`, info)
      .then(({ data: {id, name, image, token: AUTH_TOKEN }}) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
        console.log(AUTH_TOKEN);
        navigate('/hoje');
        setInfo({ ...rest, loading: false, user: {id, name, avatar: image}});
      })
      .catch((error) => {
        console.log(error);
        setInfo({ ...rest, loading: false });
        alert(error.response.data.message ? error.response.data.message : error.message);
      }); // prettier-ignore
  };
  return <Form signup={false} submit={login} />;
}
