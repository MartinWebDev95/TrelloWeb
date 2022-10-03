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
  margin-top: 4rem;
  background-color: #FAFBFC;
`;

const DivStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 2rem;
  padding-block: 1rem;
  
  @media (min-width: 1000px) {
    grid-template-columns: 2fr auto;
    grid-template-rows: 1fr;
    column-gap: 0;
    align-items: center;
  }

  p{
    grid-row: 1/2;
    grid-column: 1/3;
    text-align: center;
    font-size: 1.2em;

    @media (min-width: 1000px) {
      grid-row: 1/2;
      grid-column: 1/2;
      text-align: right;
    }
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 1000px) {
      width: 80%;
    }

    &:first-of-type{
      grid-row: 2/3;
      grid-column: 1/2;
      place-self: end;

      @media (min-width: 1000px) {
        grid-row: 1/2;
        grid-column: 2/3;
      }
    }

    &:last-of-type{
      grid-row: 2/3;
      grid-column: 2/3;
      place-self: start;

      @media (min-width: 1000px) {
        grid-row: 1/2;
        grid-column: 3/4;
        place-self: end;
      }
    }
  }

`;

export { SectionStyled, Container, DivStyled };
