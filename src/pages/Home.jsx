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
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 375px;
  height: 100svh;
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
