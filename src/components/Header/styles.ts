import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > h1 {
    color: var(--brown);
    font-weight: 300;
    font-size: 28px;
  }

  @media only screen and (max-width: 425px) {
    justify-content: space-between;

    padding: 0 10px;

    > h1 {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 320px) {
    > h1 {
      font-size: 18px;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  height: 40px;

  > button {
    height: 100%;
    cursor: pointer;
    color: var(--orange);
  }

  @media only screen and (max-width: 425px) {
  }
`;
