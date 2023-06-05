import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Habit, NewHabit } from '../components/Habits';
import { useEffect, useState } from 'react';
import { Habits } from '../context/core';
import axios from 'axios';

export default function HabitsPage() {
  const [new_habit, setNewHabit] = useState(false);
  const [habits, setHabits] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    axios.get(`/habits`)
      .then((response) => setHabits(response.data))
      .catch(); // prettier-ignore
  }, []);

  const createHabit = () => {
    setNewHabit(true);
    setVisible(true);
  };

  return (
    <HabitsContainer>
      <Header />
      <Habits.Provider value={{ habits, setHabits }}>
        <main>
          <Title>
            <h2>Meus hábitos</h2>
            <input data-test="habit-create-btn" type="button" value="+" onClick={createHabit} />
          </Title>
          {new_habit && <NewHabit visible={visible} setNewHabit={setNewHabit} setVisible={setVisible} />}

          {habits.length !== 0 ? (
            <ListHabitsContainer data-test="habit-container">
              {habits.map((habit) => (
                <Habit key={habit.id} id={habit.id} name={habit.name} days={habit.days} />
              ))}
            </ListHabitsContainer>
          ) : (
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          )}
        </main>
        <Footer />
      </Habits.Provider>
    </HabitsContainer>
  );
}

const HabitsContainer = styled.section`
  position: relative;
  height: 100svh;

  main {
    padding: 92px 18px 0px;

    > p {
      margin-top: 28px;
      width: 338px;
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;

      color: #666666;
    }
  }
`;
const ListHabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 18px;

  border-radius: 5px;
  margin-bottom: 29px;
  > div:last-child {
    margin-bottom: 70px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126ba5;
  }
  > input {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 4.6px;

    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 35px;
    text-align: center;

    color: #ffffff;
  }
`;
