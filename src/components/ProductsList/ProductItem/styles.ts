import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 265px;
  height: 390px;

  background: var(--white);
  transition: 0.4s ease;
  color: var(--brown);
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  position: relative;

  &:hover {
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  }

  > img {
    display: flex;
    align-self: center;
    width: 130px;
    height: 130px;
    object-fit: cover;

    margin-top: 20px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  flex-direction: column;
  text-align: center;
  margin-top: 15px;

  h4 {
    font-size: 14px;
    text-align: left;
    margin-top: 8px;
    font-weight: 500;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  margin-top: 18px;
  color: var(--dark-orange);
`;

export const ProductCategory = styled.div`
  color: var(--grey);
  font-size: 14px;
  text-align: left;
  opacity: 0.5;
  text-transform: uppercase;
  margin-top: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  bottom: 0;
  position: absolute;

  > button {
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    color: var(--white);
    background-color: var(--orange);
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 4px;
    padding: 0 20px;
    transition: 0.2s ease;
    text-transform: uppercase;
    &:hover {
      background-color: var(--dark-orange);
    }
  }
`;
