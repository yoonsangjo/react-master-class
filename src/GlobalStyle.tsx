import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* other styles */
  *{
    box-sizing: border-box;
  }
  body{
    font-family: "Noto Sans KR", sans-serif;
    color:${({ theme }) => theme.$textColor};
    background-color: ${({ theme }) => theme.$bgColor};
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
