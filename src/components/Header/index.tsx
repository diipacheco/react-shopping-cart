import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import CategoriesList from '../CategoriesList';
import MobileMenu from '../MobileMenu';
import BurgerButton from '../MobileMenu/Burger';

import { Container, CartContainer, Content } from './styles';

export default function Header() {
  const [openedMenu, setOpenedMenu] = useState(false);
  return (
    <Container>
      <Content>
        <BurgerButton opened={openedMenu} setOpenedMenu={setOpenedMenu} />
        <h1>React Shopping Cart 🛒</h1>
        <CartContainer>
          <button type="button">
            <MdShoppingCart size={28} />
          </button>
        </CartContainer>
        <MobileMenu opened={openedMenu} />
      </Content>
      <CategoriesList />
    </Container>
  );
}
