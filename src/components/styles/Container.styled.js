import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 15px 80px;

  max-width: 1440px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    padding: 5px 20px;
    max-width: 375px;
  }
`;
