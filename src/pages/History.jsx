import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';

/* 
[
    {
        "day": "20/05/2021",
        "habits": [
            {
                "id": 3,
                "name": "Acordar",
                "date": "2021-05-20T12:00:00.000Z",
                "weekDay": 4,
                "historyId": null,
                "done": false
            }
        ]
    },
    {
        "day": "19/05/2021",
        "habits": [
            {
                "id": 3,
                "name": "Acordar",
                "date": "2021-05-19T12:00:00.000Z",
                "weekDay": 3,
                "historyId": 626,
                "done": true
            },
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-19T12:00:00.000Z",
                "weekDay": 3,
                "historyId": 625,
                "done": true
            }
        ]
    },
    {
        "day": "18/05/2021",
        "habits": [
            {
                "id": 3,
                "name": "Acordar",
                "date": "2021-05-18T12:00:00.000Z",
                "weekDay": 2,
                "historyId": 7,
                "done": true
            }
        ]
    },
    {
        "day": "17/05/2021",
        "habits": [
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-17T12:00:00.000Z",
                "weekDay": 1,
                "historyId": 1,
                "done": true
            }
        ]
    },
    {
        "day": "16/05/2021",
        "habits": [
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-16T12:00:00.000Z",
                "weekDay": 0,
                "historyId": null,
                "done": false
            }
        ]
    },
    {
        "day": "14/05/2021",
        "habits": [
            {
                "id": 1,
                "name": "Ler 1 capítulo do livro",
                "date": "2021-05-14T12:00:00.000Z",
                "weekDay": 5,
                "historyId": null,
                "done": false
            }
        ]
    }
]
*/

export default function History() {
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    // /habits/history/daily
    // axios
  }, []);
  return (
    <HistoryContainer>
      <Header />
      <main>
        <Title>Histórico</Title>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
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
