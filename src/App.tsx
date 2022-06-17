import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ProductsContextProvider } from './context/Products';
import { CartContextProvider } from './context/Cart';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsContextProvider>
          <CartContextProvider>
            <Routes />
          </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
