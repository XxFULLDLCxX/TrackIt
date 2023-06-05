import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Habit } from '../components/Today';
import { useContext } from 'react';
import { Infos } from '../context/core';

dayjs.locale('pt-br');

const now = dayjs().format('dddd, DD/MM');

export default function Today() {
  const { percentage, setInfo, ...rest } = useContext(Infos);
  const [habits, setHabits] = useState({ list: [], done: [] });
  useEffect(() => {
    axios.get(`/habits/today`)
    .then(({data}) => {
      setHabits({list: data, done: data.filter((h) => h.done === true)});
      setInfo({ ...rest, percentage: (data.filter((h) => h.done === true).length / data.length) * 100 });
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message ? error.response.data.message : error.message);
    }); // prettier-ignore
  }, []);
  return (
    <TodayContainer>
      <Header />
      <main>
        <h2 data-test="today">{now.charAt(0).toUpperCase() + now.slice(1)}</h2>
        <p data-test="today-counter" style={{ color: percentage > 0 ? '#8fc549' : '#666666' }}>
          {percentage > 0 ? `${Math.round(percentage)}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}
        </p>
        <ul>
          {habits.list.map((habit) => (
            <Habit key={habit.id} info={habit} habits={habits} setHabits={setHabits} />
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
  > main ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &:last-child {
      margin-bottom: 48px;
    }
  }
  > main p {
    height: 22;
    margin: 0 17px 28px;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;
