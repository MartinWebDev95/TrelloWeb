import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;

  @media (min-width: 576px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }
`;

const DivGrid = styled.div`
  border-block: 1px solid var(--softWhite);
  padding-block: 2rem;
  display: grid;
  grid-row: 3;
  gap: 2rem;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img{
    @media (min-width: 1000px) {
      width: 20%;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const CardInfo = styled.div`
  h3{
    padding-top: 2rem;

    @media (min-width: 1000px) {
      padding-top: 0;
      font-size: 1.4em;
    }
  }

  p{
    padding-block: 1rem;
    width: 80%;

    @media (min-width: 1000px) {
      width: 100%;
      line-height: 1.6em;
    }
  }

  button{
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
  }
`;

export {
  Container, DivGrid, Card, CardInfo,
};
