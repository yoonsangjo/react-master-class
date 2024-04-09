import styled, { keyframes } from 'styled-components';

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.$bgColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.$textColor};
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.$textColor};
  padding: 10px 0;
`;

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.$bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Space = styled.div`
  width: 100%;
  height: 10px;
  /* background-color: #f7f7f7; */
  margin: 50px 0;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 50px;
  font-size: 18px;
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const RotationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;

  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App_styleComponentBasic() {
  return (
    <Wrap>
      <Title>Style Components Basic!!</Title>
      <Father>
        <Box>
          <Text>Hello</Text>
        </Box>
        <Circle />
      </Father>
      <Space />
      <Father>
        <Btn>Log in</Btn>
        <Btn as="a" href="#">
          Log in
        </Btn>
      </Father>
      <Space />
      <Father>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Father>
      <Space />
      <Wrapper>
        <RotationBox>
          <Emoji>🤣</Emoji>
        </RotationBox>
        <Emoji>🤢</Emoji>
      </Wrapper>
    </Wrap>
  );
}

export default App_styleComponentBasic;
