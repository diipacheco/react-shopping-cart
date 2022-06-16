import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;

  padding: 20px 0;

  > li + li {
    margin-left: 20px;
  }

  > li {
    list-style: none;
    color: var(--dark-orange);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
