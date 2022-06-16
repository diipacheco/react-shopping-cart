import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import CategoriesList from '../CategoriesList';

import { Container, CartContainer, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <h1>React Shopping Cart 🛒</h1>
        <CartContainer>
          <button type="button">
            <MdShoppingCart size={38} />
          </button>
        </CartContainer>
      </Content>
      <CategoriesList />
    </Container>
  );
}
