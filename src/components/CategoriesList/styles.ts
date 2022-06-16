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
    transition: color 0.3s linear;

    > a {
      color: var(--dark-orange);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      transition: 0.1s ease;

      &:hover {
        color: var(--orange);
        border-bottom: 4px solid var(--brown);
      }
    }
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
