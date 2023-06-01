import { useState } from 'react';
import styled from 'styled-components';

export default function NewHabit() {
  const cancel = () => {
    console.log('cancel');
  };
  const save = () => {
    console.log('save');
  };
  return (
    <NewHabitContainer data-test="habit-create-container">
      <Input data-test="habit-name-input" type="text" placeholder="nome do hábito" />
      <WeekContainer>
        {'DSTQQSS'.split('').map((w, index) => (
          <Day key={index} value={w} />
        ))}
      </WeekContainer>
      <div>
        <Button data-test="habit-create-cancel-btn" onClick={cancel}>
          Cancelar
        </Button>
        <Button data-test="habit-create-save-btn" className="save" onClick={save}>
          Salvar
        </Button>
      </div>
    </NewHabitContainer>
  );
}

function Day({ value }) {
  const [select, setSelect] = useState(false);
  const press = () => {
    setSelect(select ? false : true);
  };
  return <Input data-test="habit-day" type="button" value={value} onClick={press} selected={select} />;
}

const NewHabitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  padding: 18px;

  width: 340px;
  height: 180px;

  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
`;

const WeekContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 4px;
  margin-bottom: 21px;
`;

const Input = styled.input`
  &::placeholder {
    color: #dbdbdb;
  }
  &[type='text'] {
    width: 303px;
    height: 45px;
    padding: 0px 11px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    color: #666666;
  }
  &[type='button'] {
    width: 30px;
    height: 30px;
    background-color: ${({ selected }) => (selected ? '#CFCFCF' : '#FFFFFF')};
    border: 1px solid ${({ selected }) => (selected ? '#CFCFCF' : '#D5D5D5')};
    color: ${({ selected }) => (selected ? '#FFFFFF' : '#DBDBDB')};
  }
  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
`;

const Button = styled.button`
  background-color: #ffffff;
  border-radius: 4.6px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #52b6ff;
  &.save {
    width: 84px;
    height: 35px;
    margin-left: 23px;
    background-color: #52b6ff;
    color: #ffffff;
  }
`;
