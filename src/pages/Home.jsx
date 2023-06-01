import styled from 'styled-components';
import trackit from '../assets/trackit.svg';

export default function Home() {
  return (
    <HomeContainer>
      <h1>
        <img src={trackit} alt="Trackit" />
      </h1>
      <FormContainer>
        <input type="text" />
        <input type="text" />
        <button type="submit">Enviar</button>
      </FormContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
const FormContainer = styled.div``;
