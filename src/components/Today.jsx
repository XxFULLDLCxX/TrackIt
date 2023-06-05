import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Infos } from '../context/core';
import check from '../assets/check.svg';

export function Habit({ info, habits: { list, done }, setHabits }) {
  const [complete, setComplete] = useState(info.done);
  let [sequence, setSequence] = useState(info.currentSequence);
  let [record, setRecord] = useState(info.highestSequence);
  const { percentage, setInfo, ...rest } = useContext(Infos);

  const check = () => {
    setComplete(!complete);
    setHabits({ list, done: complete ? done.filter((i) => i.id !== info.id) : [...done, info] });
    setInfo({ ...rest, percentage: ((complete ? done.length - 1 : done.length + 1) / list.length) * 100 });

    axios.post(`/habits/${info.id}/${!complete ? 'check' : 'uncheck'}`, {})
    .then(() => {
      console.log('Atualizado', !complete);
      setRecord(!complete && record < (sequence + 1) ? record + 1: record - 1);
      setSequence(!complete ? sequence + 1 : sequence - 1);
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message ? error.response.data.message : error.message);
    }); // prettier-ignore
  };

  return (
    <HabitContainer data-test="today-habit-container">
      <InfoContainer>
        <Title data-test="today-habit-name">{info.name}</Title>
        <div>
          <p data-test="today-habit-sequence">
            Sequência atual: <span style={{ color: complete ? '#8fc549' : '#666666' }}>{sequence} dias</span>
          </p>
          <p data-test="today-habit-record">
            Seu recorde:
            <span style={{ color: record > 0 && record <= sequence ? '#8fc549' : '#666666' }}> {record} dias</span>
          </p>
        </div>
      </InfoContainer>
      <Button data-test="today-habit-check-btn" onClick={check} done={complete}></Button>
    </HabitContainer>
  );
}

const HabitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 13px;

  width: 340px;
  height: 90px;

  background-color: #ffffff;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  && > div p {
    margin: 0;
    width: 148px;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
  }
`;

const Title = styled.h3`
  margin-bottom: 7px;
  align-self: flex-start;
  min-height: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #666666;
`;

const Button = styled.button`
  width: 69px;
  height: 69px;

  border-radius: 5px;
  background: url(${check}) no-repeat;
  background-size: 35px 28px;
  background-position: 50%;
  background-color: ${({ done }) => (done ? '#8fc549' : '#ebebeb')};
  border: ${({ done }) => (done ? 'none' : '1px solid #e7e7e7')};
`;
