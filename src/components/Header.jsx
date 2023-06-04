import styled from 'styled-components';
import avatar from '../assets/user.svg';
import { useContext } from 'react';
import { Infos } from '../context/core';

export default function Header() {
  const { user } = useContext(Infos);

  const login = (e) => {
    e.preventDefault();
    console.log('login');
  };
  return (
    <HeaderContainer data-test="header">
      <h1>TrackIt</h1>
      <img data-test="avatar" src={user.avatar} alt="Foto do Usuário" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 70px;

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
