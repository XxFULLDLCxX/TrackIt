import { useNavigate } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';
import { useContext } from 'react';
import { Infos } from '../context/core';

export default function Signup() {
  const navigate = useNavigate();
  const { loading, setInfo, ...rest } = useContext(Infos);
  const signup = (info) => {
    setInfo({ ...rest, loading: true });
    axios.post(`/auth/sign-up`, info)
      .then(() => {
        navigate('/');
        setInfo({ ...rest, loading: false });
      })
      .catch((error) => {
        setInfo({ ...rest, loading: false });
        alert(error.response.data.message ? error.response.data.message : error.message);
      }); // prettier-ignore
  };
  return <Form signup={true} submit={signup} />;
}
