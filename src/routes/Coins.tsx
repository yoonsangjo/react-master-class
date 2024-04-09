import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.$accentColor};
`;

const Coins = () => {
  return (
    <>
      <Title>코인</Title>
    </>
  );
};

export default Coins;
