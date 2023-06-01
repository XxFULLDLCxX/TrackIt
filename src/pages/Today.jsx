import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Today() {
  return (
    <TodayContainer>
      <Header />
      <main>
        <h1>Today</h1>
      </main>
      <Footer />
    </TodayContainer>
  );
}

const TodayContainer = styled.div`
  height: 100svh;
  main {
    height: calc(100% - 140px);
    background-color: #f2f2f2;
  }
`;
