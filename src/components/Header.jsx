import styled from 'styled-components';
import { useContext } from 'react';
import { Infos } from '../context/core';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Header() {
  const { user, setInfo, ...rest } = useContext(Infos);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Recarregou Header');
  });

  /* useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.post(`/auth/login`, { email: user.email, password: user.password })
      .then(({ data}) => {
        localStorage.setItem('user', JSON.stringify({data}));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        setInfo({ ...rest, user: data});
      })
      .catch((error) => {
        alert(error.response.data.message ? error.response.data.message : error.message);
      }); // prettier-ignore
      console.log('ue');
    }
  }, []); */
  return (
    <HeaderContainer data-test="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>TrackIt</h1>
      </Link>
      <img data-test="avatar" src={user.image} alt="Foto do Usuário" />
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
