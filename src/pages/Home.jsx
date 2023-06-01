import styled from 'styled-components';
import trackit from '../assets/trackit.svg';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function Home() {
  return (
    <HomeContainer>
      <h1>
        <img src={trackit} alt="Trackit" />
      </h1>
      <Login />
      <Link data-test="signup-link" to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  padding-top: 68px;
  h1 {
    width: 180px;
    height: 180px;
    margin-bottom: 7px;
  }
  a {
    min-width: 232px;
    min-height: 17px;

    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  input {
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
  button {
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
