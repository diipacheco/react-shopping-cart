import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { useCart } from '../../context/Cart';

import Cart from '../Cart';
import CategoriesList from '../CategoriesList';
import MobileMenu from '../MobileMenu';
import BurgerButton from '../MobileMenu/Burger';

import {
  Container,
  CartContainer,
  Content,
  ProductsAddedTooltip,
} from './styles';

export default function Header() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const { setIsCartOpened, isCartOpened, addedProducts } = useCart();

  return (
    <Container>
      <Content>
        <BurgerButton opened={openedMenu} setOpenedMenu={setOpenedMenu} />
        <h1>React Shopping Cart 🛒</h1>

        <CartContainer>
          <button onClick={() => setIsCartOpened(!isCartOpened)} type="button">
            <MdShoppingCart size={40} />
          </button>
          <ProductsAddedTooltip>{addedProducts.length}</ProductsAddedTooltip>
          <Cart />
        </CartContainer>

        <MobileMenu opened={openedMenu} />
      </Content>
      <CategoriesList />
    </Container>
  );
}
