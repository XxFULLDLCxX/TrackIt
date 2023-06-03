import { useContext } from 'react';
import styled from 'styled-components';
import { Infos } from '../context/core';
import { ThreeDots } from 'react-loader-spinner';

export default function Form({ signup, submit }) {
  const { loading } = useContext(Infos);

  const preSubmit = (e) => {
    e.preventDefault();
    const info = signup ? ['email', 'password', 'name', 'image'] : ['email', 'password'];
    submit(info.reduce((obj, k) => ({ ...obj, [k]: e.target[k].value }), {}));
  };
  return (
    <FormContainer onSubmit={preSubmit}>
      <Input data-test="email-input" type="email" placeholder="email" name="email" disabled={loading} />
      <Input data-test="password-input" type="password" placeholder="senha" name="password" disabled={loading} />
      {signup && <Input data-test="user-name-input" type="text" placeholder="nome" name="name" disabled={loading} />}
      {signup && <Input data-test="user-image-input" type="text" placeholder="foto" name="image" disabled={loading} />}
      {signup ? (
        <Button data-test="signup-btn" type="submit" disabled={loading}>
          {loading ? <ThreeDots height="80" width="80" radius="8" color="#FFF" /> : 'Cadastrar'}
        </Button>
      ) : (
        <Button data-test="login-btn" type="submit" disabled={loading}>
          {loading ? <ThreeDots height="80" width="80" radius="8" color="#FFF" /> : 'Enviar'}
        </Button>
      )}
    </FormContainer>
  );
}

const Input = styled.input.attrs({ required: true })`
  &::placeholder {
    color: #dbdbdb;
  }
  &:disabled {
    background-color: #f2f2f2;
  }
  width: 303px;
  height: 45px;

  background: #ffffff;
  padding: 9px 11px 11px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
`;

const Button = styled.button`
  ${Input};

  &:disabled {
    opacity: 0.7;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 303px;
  height: 45px;

  background: #52b6ff;
  border-radius: 4.6px;

  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  color: #ffffff;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
