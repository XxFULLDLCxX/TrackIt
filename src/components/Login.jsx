import { useContext } from 'react';
import { InputsDesabled } from '../context/desabled';
import Form from './Form';
import { BASE_URL } from '../context/core';

export default function Login() {
  const { setLoading } = useContext(InputsDesabled);
  const login = (info) => {
    console.log('login', info);
    setLoading(true);
    axios.post(`${BASE_URL}/auth/login`, info)
      .then(response => {
        console.log(response);
        navigate('/hoje');
        setLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.message ? error.response.data.message : error.message);
        setLoading(false);
      }); // prettier-ignore
  };
  return <Form signup={false} submit={login} />;
}
