import Form from './Form';

export default function Login() {
  const login = (e) => {
    e.preventDefault();
    console.log('login');
  };
  return <Form signup={false} submit={login} />;
}
