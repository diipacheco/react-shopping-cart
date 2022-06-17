import styled from 'styled-components';

interface IContainerProps {
  isCartOpened: boolean;
}

export const Container = styled.div<IContainerProps>`
  &:before {
    top: -8px;
    right: 10px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--white);
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    z-index: 1;
  }

  z-index: 2;
  display: ${({ isCartOpened }) => (isCartOpened ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 48px;
  right: 0;
  width: 360px;
  height: 388px;
  overflow-y: scroll;
  background-color: var(--white);
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

  @media only screen and (max-width: 425px) {
    width: 400px;
  }

  @media only screen and (max-width: 375px) {
    width: 350px;
  }

  @media only screen and (max-width: 320px) {
    width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 60px 15px;
  height: 100px;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);

  > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-fit: contain;
  }
`;

export const TitleContainer = styled.div`
  > h5 {
    margin-left: 20px;
  }

  > p {
    font-size: 12px;
    color: var(--light-brown);
    margin-left: 20px;
    margin-top: 05px;
  }
`;

export const PriceContainer = styled.div`
  display: block;
  h4 {
    font-size: 18px;
    margin-left: 16px;
    color: var(--dark-orange);
    font-weight: 700;
    letter-spacing: 0.9px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding-left: 75px;
  margin-bottom: 50px;
  margin-top: 10px;

  > button {
    cursor: pointer;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px;
  transition: 0.4s ease;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);

  > div h5 {
    font-size: 16px;
    font-weight: normal;
    color: var(--light-brown);
  }
  > div h4 {
    font-size: 24px;
    color: var(--orange);
    font-weight: bold;
    margin-right: 28px;
  }
`;

export const CheckoutButton = styled.button`
  height: 48px;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 6px;
  color: var(--white);
  background: var(--orange);
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  border: 0;
  cursor: pointer;
  transition: 0.2s ease;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.4s ease;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);

  strong {
    margin-top: 10px;
    color: var(--brown);
    font-size: 24px;
    font-weight: normal;
  }
  p {
    color: var(--orange);
    margin-top: 10px;
    font-size: 12px;
  }
`;
