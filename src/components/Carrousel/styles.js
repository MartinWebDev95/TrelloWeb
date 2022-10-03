import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  overflow: hidden;

  @media (min-width: 1000px){
    width: 80%;
  }
`;

const ContainerCarrousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 400%;
  transform: translateX(0%);
  transition: all .3s ease-in-out;
  padding-bottom: 2rem;
  order: 1;

  @media (min-width: 1000px){
    order: 2;
    padding-bottom: 6rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;

export {
  ContainerCarrousel,
  Container,
  Wrapper,
};
