import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Habits from '../components/Habits';
import NewHabit from '../components/NewHabit';

export default function HabitsPage() {
  return (
    <HabitsContainer>
      <Header />
      <main>
        <Title>
          <h2>Meus hábitos</h2>
          <button data-test="habit-create-btn">+</button>
        </Title>
        {<NewHabit />}
        {<Habits />}
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </main>
      <Footer />
    </HabitsContainer>
  );
}

const HabitsContainer = styled.section`
  position: relative;
  height: 100svh;
  main {
    background-color: #f2f2f2;
    width: 100%;
    height: calc(100% - 140px);
    padding: 22px 18px 0px;

    > p {
      width: 338px;
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;

      color: #666666;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126ba5;
  }
  button {
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
