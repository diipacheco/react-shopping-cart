import React from 'react';

import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <ProductsList />
    </Container>
  );
}

export default Main;
