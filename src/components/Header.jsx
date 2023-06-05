import styled from 'styled-components';
import { useContext } from 'react';
import { Infos } from '../context/core';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user } = useContext(Infos);

  const login = (e) => {
    e.preventDefault();
    console.log('login');
  };
  return (
    <HeaderContainer data-test="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>TrackIt</h1>
      </Link>
      <img data-test="avatar" src={user.avatar} alt="Foto do Usuário" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 70px;

  z-index: 1;

  background: #126ba5;
  padding: 0px 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  h1 {
    width: 97px;
    height: 49px;

    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;

    color: #ffffff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;
