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

  > h1 {
    color: var(--brown);
    font-weight: 300;
    font-size: 28px;
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
`;
