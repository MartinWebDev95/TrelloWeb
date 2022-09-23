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
  margin-block: 4rem;
`;

const Title = styled.h4`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 1rem;

  @media (min-width: 1000px) {
    font-size: 2.2em;
  }
`;

const Info = styled.p`
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 1rem;
  line-height: 1.6em;
`;

const Button = styled.button`
  display: flex;
  margin-inline: auto;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  border-radius: 5px;
  padding-block: .8rem;
  padding-inline: 1.2rem;
  font-size: 1em;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: #0747A6;
  }
`;

const ImageStyled = styled.picture`
  margin-block: 2rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 1rem;
  line-height: 1.6em;
`;

const DivCompanies = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  place-items: center center;
  
  img:nth-child(6){
    width: 65%;
  }

  @media (min-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

    img:nth-child(4){
      grid-column: 2/3;
    }

    img:nth-child(5){
      grid-row: 3/4;
      grid-column: 1/3;
    }

    img:nth-child(6){
      grid-row: 3/4;
      grid-column: 2/4;
      width: 40%;
    }
  }

  @media (min-width: 1000px) {
    //width: 70%;
    margin-inline: auto;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);

    img:nth-child(4){
      grid-row: 1;
      grid-column: 4;
    }

    img:nth-child(5){
      grid-row: 2;
      grid-column: 2/3;
    }

    img:nth-child(6){
      grid-row: 2;
      grid-column: 3/4;
      width: 75%;
    }
  }
`;

const DivStyled = styled.div`
  @media (min-width: 1000px){
    width: 85%;
    margin-inline: auto;
  }
`;

export {
  Container,
  Title,
  Info,
  Button,
  SectionStyled,
  ImageStyled,
  Subtitle,
  DivCompanies,
  DivStyled,
};
