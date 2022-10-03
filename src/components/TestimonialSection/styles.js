import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;

  @media (min-width: 576px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }
`;

const SectionStyled = styled.section`
  background-color: #E6FCFF;
  padding-top: 2rem;
  margin-top: 4rem;

  @media (min-width: 1000px) {
    padding-top: 6rem;
  }
`;

export {
  Container,
  SectionStyled,
};
