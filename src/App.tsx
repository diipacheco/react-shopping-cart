import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './context/Products';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsContextProvider>
          <Routes />
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
