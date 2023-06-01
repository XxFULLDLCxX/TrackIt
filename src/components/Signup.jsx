import { useNavigate } from 'react-router-dom';
import Form from './Form';

export default function Signup() {
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    navigate('/habitos');
    console.log('signup');
  };
  return <Form signup={true} submit={signup} />;
}
