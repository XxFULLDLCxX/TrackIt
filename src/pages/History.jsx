import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
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
  const [history, setHistory] = useState([]);
  const [habits, setHabits] = useState([]);
  const [view, setView] = useState(false);

  const historyView = () => {
    setView(!view);
  };

  useEffect(() => {
    axios
      .get('/habits/history/daily')
      .then(({ data }) => {
        setHistory(data);
      })
      .catch();
    // /habits/history/daily
    // axios
  }, []);
  const formatMonth = (locale, date) => {
    return dayjs(date).format('MMMM');
  };
  const formatShortWeekday = (locale, date) => {
    return dayjs(date).format('ddd');
  };
  const formatMonthYear = (locale, date) => {
    return `${dayjs(date).format('MMMM')} de ${dayjs(date).format('YYYY')}`;
  };

  const calendarStyle = ({ date }) => {
    const day = `${String(date.getDate()).padStart(2, '0')}`;
    const month = `${String(date.getMonth() + 1).padStart(2, '0')}`;
    const formatDay = `${day}/${month}/${date.getFullYear()}`;
    let full_complete = 'none';
    history.forEach(({ day, habits }) => {
      if (day === formatDay) {
        full_complete = false;
        full_complete = !habits.map((h) => h.done).includes(false);
      }
    });
    if (full_complete !== 'none') return full_complete ? 'green' : 'red';
  };
  const onClickDay = (date) => {
    const day = `${String(date.getDate()).padStart(2, '0')}`;
    const month = `${String(date.getMonth() + 1).padStart(2, '0')}`;
    const formatDay = `${day}/${month}/${date.getFullYear()}`;
    history.forEach(({ day, habits }) => {
      if (day === formatDay) setHabits(habits);
    });
    setView(!view);
    console.log('test');
  };
  return (
    <HistoryContainer>
      <Header />
      <main>
        <Title>Histórico</Title>

        <Calendar
          data-test="calendar"
          formatMonth={formatMonth}
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={formatMonthYear}
          tileClassName={calendarStyle}
          onChange={onChange}
          onClickDay={onClickDay}
          value={value}
        />

        {view && (
          <ListView>
            <button onClick={historyView}>Voltar</button>
            {habits.map((h) => (
              <Habit key={h.id} name={h.name} done={h.done} date={h.date} habit={h} />
            ))}
          </ListView>
        )}
      </main>
      <Footer />
    </HistoryContainer>
  );
}

function Habit({ name, done, habit, date }) {
  console.log(habit);
  return (
    <ItemView isDone={done}>
      <h2>{name}</h2>
      <h3>{date.split('T')[0].replace(/(\d{4})\-(\d{2})\-(\d{2})/, '$3/$2/$1')}</h3>
    </ItemView>
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
  .react-calendar {
    margin: 0px auto;
    width: 335px;
    height: 400px;
    border-radius: 10px;
  }
  && .react-calendar .green {
    background-color: #8cc654;
    border-radius: 50%;
    height: 50px;
    scale: 0.8;
  }
  && .react-calendar .red {
    box-sizing: border-box;
    background-color: #ea5766;
    border-radius: 50%;
    height: 50px;
    padding: 0;
    margin: 0;
    scale: 0.8;
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

const ListView = styled.ul`
  width: 335px;
  height: 400px;
  border-radius: 10px;
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  background-color: #f2f2f2;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemView = styled.li`
  h2 {
    color: ${({ isDone }) => (isDone ? '#8cc654' : '#ea5766')};
    margin-bottom: 8px;
  }
  min-height: max-content;
  padding: 10px;
  background-color: #ffffff;
  list-style: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #666666;
`;
