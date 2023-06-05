import styled from 'styled-components';
import dump from '../assets/dump.svg';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useContext } from 'react';
import { Habits, Infos } from '../context/core';

export function Habit({ id, name, days }) {
  const { habits, setHabits } = useContext(Habits);

  const dumpPress = (id) => {
    if (window.confirm('Deletar esse Hábito? ')) {
      setHabits([...habits.filter((n) => n.id != id)]);
      axios.delete(`/habits/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message ? error.response.data.message : error.message);
        }); // prettier-ignore
    }
  };
  return (
    <HabitContainer data-test="habit-container">
      <Title data-test="habit-name">{name}</Title>
      <WeekContainer>
        {'DSTQQSS'.split('').map((w, index) => (
          <Day data-test="habit-day" key={index} selected={days.includes(index)} disabled>
            {w}
          </Day>
        ))}
      </WeekContainer>
      <Dump data-test="habit-delete-btn" onClick={() => dumpPress(id)}></Dump>
    </HabitContainer>
  );
}

export function NewHabit({ visible, setNewHabit, setVisible }) {
  const { loading, setInfo, ...rest } = useContext(Infos);
  const { habits, setHabits } = useContext(Habits);
  const [days, setDays] = useState([]);
  const [habit, setHabit] = useState('');

  const createHabit = (e) => {
    e.preventDefault();
    /* if (habit === '') {
      return alert('O nome do hábito deve ser definido');
    } */
    axios.post(`/habits`, { name: habit, days })
      .then(({ data: { id, name, days } }) => {
        setHabits([...habits, { id, name, days }]);
        setInfo({ ...rest, loading: false });
        setNewHabit(false);
      })
      .catch((error) => {
        setInfo({ ...rest, loading: false });
        // alert(error.response.data.message ? error.response.data.message : error.message);
        setTimeout(() => alert(error.response.data.message ? error.response.data.message : error.message), 10);
      }); // prettier-ignore
    setInfo({ ...rest, loading: true });
  };
  const cancel = () => setVisible(false);
  return (
    <NewHabitForm data-test="habit-create-container" onSubmit={createHabit} visible={visible}>
      <Text
        data-test="habit-name-input"
        placeholder="nome do hábito"
        name="habit"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        disabled={loading}
      />
      <Days days={days} setDays={setDays} />
      <div>
        <Cancel data-test="habit-create-cancel-btn" value="Cancelar" onClick={cancel} disabled={loading} />
        <Save data-test="habit-create-save-btn" disabled={loading}>
          {loading ? <ThreeDots height="40" width="40" radius="8" color="#FFF" /> : 'Salvar'}
        </Save>
      </div>
    </NewHabitForm>
  );
}

function Days({ days, setDays }) {
  const press = (id) => setDays(days.includes(id) ? days.filter((n) => n != id) : [...days, id]);
  const { loading } = useContext(Infos);

  return (
    <WeekContainer>
      {'DSTQQSS'.split('').map((w, index) => (
        <Day
          data-test="habit-day"
          key={index}
          onClick={() => press(index)}
          selected={days.includes(index)}
          disabled={loading}
        >
          {w}
        </Day>
      ))}
    </WeekContainer>
  );
}

const NewHabitForm = styled.form`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  padding: 18px;

  width: 340px;
  height: 180px;

  background: #ffffff;
  border-radius: 5px;
  margin: 20px auto 29px;
  > div:last-of-type {
    display: flex;
  }
`;
const Text = styled.input.attrs({ type: 'text' })`
  &::placeholder {
    color: #dbdbdb;
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #b3b3b3;
  }
  width: 303px;
  height: 45px;
  padding: 0px 11px;
  background: #ffffff;
  border: 1px solid #d5d5d5;

  color: #666666;

  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;
const Save = styled.button.attrs({ type: 'submit' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  margin-left: 23px;
  border-radius: 4.6px;
  background-color: #52b6ff;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
  &:disabled {
    opacity: 0.7;
  }
`;
const Cancel = styled.input.attrs({ type: 'button' })`
  background-color: #ffffff;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #52b6ff;
`;

const HabitContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 13px 14px 0px 10px;

  width: 340px;
  height: 90px;

  background-color: #ffffff;
  border-radius: 5px;
`;
const WeekContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 4px;
  margin-bottom: 21px;
`;
const Title = styled.h3`
  align-self: flex-start;
  min-height: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #666666;
`;
const Day = styled.button.attrs({ type: 'button' })`
  &::placeholder {
    color: #dbdbdb;
  }
  width: 30px;
  height: 30px;
  background-color: ${({ selected }) => (selected ? '#CFCFCF' : '#FFFFFF')};
  border: 1px solid ${({ selected }) => (selected ? '#CFCFCF' : '#D5D5D5')};
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#DBDBDB')};

  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;
const Dump = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 25px;
  box-sizing: content-box;
  background: url(${dump}) no-repeat;
  background-size: 14px 16px;
  background-position: 50%;
`;
