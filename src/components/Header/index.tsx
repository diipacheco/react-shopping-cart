import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { Container, CartContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>React Shopping Cart 🛒</h1>
      <CartContainer>
        <button type="button">
          <MdShoppingCart size={38} />
        </button>
      </CartContainer>
    </Container>
  );
}
