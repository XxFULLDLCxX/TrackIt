import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import axios from 'axios';
import { useEffect, useState } from 'react';

dayjs.locale('pt-br');

const now = dayjs().format('dddd DD/MM');

export default function Today() {
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    axios.get(`/habits/today`).then((response) => {
      console.log(response);
      // setHabits()
    });
  }, []);
  return (
    <TodayContainer>
      <Header />
      <main>
        <h2>{now.charAt(0).toUpperCase() + now.slice(1)}</h2>
        {!habits && <p>Nenhum hábito concluído ainda</p>}
        <ul>
          {habits.map((habit) => (
            <li>habit</li>
          ))}
        </ul>
      </main>
      <Footer />
    </TodayContainer>
  );
}

const TodayContainer = styled.div`
  height: 100svh;
  > main h2 {
    height: 29px;
    margin: 28px 17px 3px;

    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126ba5;
  }
  > main p {
    height: 22;
    margin-left: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;
