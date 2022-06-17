import React, { useMemo } from 'react';
import {
  MdAddShoppingCart,
  MdClose,
  MdRemoveShoppingCart,
} from 'react-icons/md';

import { useCart } from '../../context/Cart';

import {
  Container,
  Content,
  TitleContainer,
  PriceContainer,
  ButtonsContainer,
  FooterContainer,
  CheckoutButton,
  EmptyCart,
} from './styles';

export default function Cart() {
  const { isCartOpened, addedProducts, addToCart, removeFromCart } = useCart();

  const currencyFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const total = useMemo(
    () =>
      addedProducts.reduce(
        (subTotal, product) => subTotal + product.subtotal,
        0,
      ),
    [addedProducts],
  );

  return (
    <Container isCartOpened={isCartOpened}>
      {!addedProducts.length ? (
        <EmptyCart>
          <MdRemoveShoppingCart size={120} color="var(--light-brown)" />
          <strong>Your cart is empty!</strong>
          <p>Add some stuff to proceed with the buy.</p>
        </EmptyCart>
      ) : (
        <>
          {addedProducts.map(product => (
            <Content key={product.id}>
              <img src={product.image} alt={product.description} />
              <TitleContainer>
                <h5>{product.title}</h5>
                <p>Quantity: {product.addedToCart}</p>
              </TitleContainer>
              <PriceContainer>
                <ButtonsContainer>
                  <button type="button">
                    <MdAddShoppingCart
                      style={{ marginRight: '10px' }}
                      size={20}
                      color="var(--orange)"
                      onClick={() => addToCart(product.id)}
                    />
                  </button>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    type="button"
                  >
                    <MdClose size={20} color="var(--brown)" />
                  </button>
                </ButtonsContainer>
                <h4>{currencyFormatter.format(product.subtotal)}</h4>
              </PriceContainer>
            </Content>
          ))}
        </>
      )}
      <FooterContainer>
        <div>
          <h5>Subtotal</h5>
          <h4>{currencyFormatter.format(total)}</h4>
        </div>
        <div>
          <CheckoutButton type="button" disabled={!addedProducts.length}>
            Checkout
          </CheckoutButton>
        </div>
      </FooterContainer>
    </Container>
  );
}
