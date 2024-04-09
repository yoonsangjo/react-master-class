import { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyle from './GlobalStyle';
import Router from './Router';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          />
        </Helmet>
      </HelmetProvider>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
