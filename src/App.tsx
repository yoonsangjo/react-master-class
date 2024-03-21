import styled from 'styled-components';
import Circle from './Circle';
import { useState } from 'react';

const Space = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f7f7f7;
  margin: 50px 0;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.$bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.$textColor};
`;

function App() {
  const [value, setValue] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', value);
  };

  return (
    <>
      <Circle $bgColor="teal" $borderColor="yellow" />
      <Circle $bgColor="tomato" text="im here" />
      <Space />
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
      <Space />
      <Container>
        <H1>protected</H1>
      </Container>
    </>
  );
}

export default App;
