import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Infos } from '../context/core';

export default function Footer() {
  const percentage = 0;

  return (
    <FooterContainer>
      <Menu data-test="menu">
        <Link data-test="habit-link" to="/habitos">
          Hábitos
        </Link>
        <Link data-test="today-link" to="/hoje">
          <Today>
            <CircularProgressbar
              value={percentage}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: '#52b6ff',
                textColor: '#fff',
                pathColor: '#fff',
                trailColor: 'transparent',
              })}
            />
          </Today>
        </Link>
        <Link data-test="history-link" to="/historico">
          Histórico
        </Link>
      </Menu>
    </FooterContainer>
  );
}

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 70px;

  background: #ffffff;

  img {
    width: 51px;
    height: 51px;
  }
  a {
    width: 68px;
    height: 22px;

    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
    text-decoration: none;
  }
`;

const FooterContainer = styled.div`
  height: 70px;
  position: fixed;
  bottom: 0px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.015);
`;

const Today = styled.h2`
  position: absolute;
  width: 91px;
  height: 91px;
  bottom: 10px;
  left: 0px;
  right: 0px;
  margin: auto;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #ffffff;

  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.15));
`;
