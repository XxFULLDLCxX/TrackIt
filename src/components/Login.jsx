import { useContext } from 'react';
import Form from './Form';
import { BASE_URL, Infos } from '../context/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { loading, setInfo, ...rest } = useContext(Infos);

  const navigate = useNavigate();
  const login = (info) => {
    console.log('login', info);
    setInfo({ ...rest, loading: true });

    axios.post(`${BASE_URL}/auth/login`, info)
      .then(({ data: {id, name, image }}) => {
        console.log(id, name, image);
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
