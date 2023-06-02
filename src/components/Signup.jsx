import { useNavigate } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';
import { InputsDesabled } from '../context/desabled';
import { useContext } from 'react';
import { BASE_URL } from '../context/core';

export default function Signup() {
  const navigate = useNavigate();
  const { setLoading } = useContext(InputsDesabled);
  const signup = (info) => {
    setLoading(true);
    console.log(info);
    axios.post(`${BASE_URL}/auth/sign-up`, info)
      .then((response) => {
        console.log(response);
        navigate('/');
        setLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.message ? error.response.data.message : error.message);
        setLoading(false);
      }); // prettier-ignore
  };
  return <Form signup={true} submit={signup} />;
}
