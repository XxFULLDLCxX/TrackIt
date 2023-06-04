import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function History() {
  return (
    <HistoryContainer>
      <Header />
      <main>
        <h1>History</h1>
      </main>
      <Footer />
    </HistoryContainer>
  );
}

const HistoryContainer = styled.div`
  height: 100svh;
`;
