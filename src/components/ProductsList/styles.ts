import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  align-items: center;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;
