import styled from 'styled-components';

const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-right: 1rem;
  order: 2;

  div{
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  @media (min-width: 1000px){
    order: 1;
    justify-content: end;
  }
`;

const Dots = styled.button`
  width: .5rem;
  height: .5rem;
  border-radius: 50px;
  border: none;
  background-color: black;
  transition: all .2s ease-in-out;

  ${(props) => (props.active === 'testimonial-1'
    ? (`
      &:nth-child(1){
        width: 4rem;
        background-color: #00B8D9;
      }
    `)
    : (`
      &:nth-child(1){
        width: .5rem;
        background-color: black;
      }
    `)
  )}

  ${(props) => (props.active === 'testimonial-2'
    ? (`
      &:nth-child(2){
        width: 4rem;
        background-color: #00B8D9;
      }
    `)
    : (`
      &:nth-child(2){
        width: .5rem;
        background-color: black;
      }
    `)
  )}

  ${(props) => (props.active === 'testimonial-3'
    ? (`
      &:nth-child(3){
        width: 4rem;
        background-color: #00B8D9;
      }
    `)
    : (`
      &:nth-child(3){
        width: .5rem;
        background-color: black;
      }
    `)
  )}

  ${(props) => (props.active === 'testimonial-4'
    ? (`
      &:nth-child(4){
        width: 4rem;
        background-color: #00B8D9;
      }
    `)
    : (`
      &:nth-child(4){
        width: .5rem;
        background-color: black;
      }
    `)
  )}
  
  span{
    display: none;
  }

  &:hover{
    cursor: pointer;
    background-color: #00B8D9;
  }
`;

const ButtonPrevious = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid transparent;
  background-color: var(--white);
  transform: rotate(90deg);
  display: none;

  &:hover{
    cursor: pointer;
    border: 1px solid var(--softWhite);
    
    svg{
      fill:#00B8D9;
    }
  }

  @media (min-width: 1000px){
    display: block;
  }
  
`;

const ButtonNext = styled(ButtonPrevious)`
  transform: rotate(-90deg);
`;

export {
  DivButtons, Dots, ButtonNext, ButtonPrevious,
};
