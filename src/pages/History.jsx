import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function History() {
  return (
    <HistoryContainer>
      <Header />
      <main>
        <Title>Histórico</Title>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </main>
      <Footer />
    </HistoryContainer>
  );
}

const HistoryContainer = styled.div`
  height: 100svh;
  > main {
    padding: 98px 17px;
  }

  > main p {
    width: 338px;
    height: 74px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #666666;
  }
`;

const Title = styled.h2`
  width: 100px;
  height: 29px;

  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;

  color: #126ba5;
  margin-bottom: 17px;
`;
