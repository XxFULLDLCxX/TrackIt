import styled from 'styled-components';

export default function Form({ signup, submit }) {
  return (
    <FormContainer onSubmit={submit}>
      <input data-test="email-input" type="text" placeholder="email" />
      <input data-test="password-input" type="text" placeholder="senha" />
      {signup && <input data-test="user-name-input" type="text" placeholder="nome" />}
      {signup && <input data-test="user-image-input" type="text" placeholder="foto" />}
      <input data-test={signup ? 'signup-btn' : 'login-btn'} type="submit" value={signup ? 'Cadastrar' : 'Enviar'} />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  input[type='text'] {
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

    color: #dbdbdb;
  }
  input[type='submit'] {
    width: 303px;
    height: 45px;

    background: #52b6ff;
    border-radius: 4.6px;

    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
  }
`;
