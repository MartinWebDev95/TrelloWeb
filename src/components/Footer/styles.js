import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: var(--deepBlue);
  padding-top: 1rem;
  padding-bottom: 4rem;

  button{
    background-color: transparent;
    color: var(--white);
    border: none;
  }

  @media (min-width: 1000px) {
    padding-top: 0;
    padding-bottom: 1rem;
  }
`;

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

const DivGrid = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  
  @media (min-width: 1000px) {
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const SocialIcon = styled.svg`
  fill: var(--white);
`;

const TrelloLogoFooter = styled.svg`
  grid-column: 1/2;
  grid-row: 1/2;
  max-width: 125px;
  padding-top: 0;  

  @media (min-width: 1000px) {  
    grid-column: 1/2;
    grid-row: 1/2;
    padding-top: 2rem;
  }
`;

const LogInFooter = styled.button`
  grid-column: 2/3;
  grid-row: 1/2;
  width: fit-content;
  place-self: center flex-end;
  font-size: 1.1em;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 1000px) {  
    grid-column: 1/2;
    grid-row: 2/3;
    place-self: center flex-start;
  }
`;

const NavFooter = styled.nav`
  grid-column: 1/3;
  grid-row: 2/3;
  margin-block: 1rem;

  @media (min-width: 1000px) {  
    grid-column: 2/6;
    grid-row: 1/3;
    margin-block: 0;
  }
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1000px) {  
    flex-direction: row;
  }
`;

const ItemList = styled.li`
  width: 100%;
  border-top: 1px solid var(--gray);

  &:last-of-type{
    border-bottom: 1px solid var(--gray);    
  }

  button{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: .5rem;
    width: 100%;
    padding: 1rem 0rem;

    span{
      color: var(--white);
      font-size: 1.2em;
    }
    
    p{
      color: var(--white);
      font-size: .9em;
      text-align: left;
    }
    
    &:hover{
      cursor: pointer;

      span, p{
        text-decoration: underline;
      }
    }

    @media (min-width: 1000px) {  
      padding: 1rem .8rem;
      height: 90px;

      &:hover{
        background-color: #344563;

        span, p{
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: 1000px) {  
    width: 25%;
    border-top: 0px solid var(--gray);

    &:last-of-type{
      border-bottom: 0px solid var(--gray);    
    }
  }
  
`;

const DivLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  grid-column: 1/2;
  grid-row: 3/4;
  margin-bottom: 2rem;

  @media (min-width: 1000px) {  
    grid-column: 1/2;
    grid-row: 3/4;
    margin-bottom: 0;
  }
`;

const FormStyled = styled.form`
  width: 100%;
`;

const SelectStyled = styled.select`
  background-color: transparent;
  color: var(--white);
  border: none;
  width: 100%;

  option{
    background-color: var(--deepBlue);
    color: var(--white);
  }

  &:hover{
    cursor: pointer;
  }

  @media (min-width: 1000px) {  
    width: 60%;
  }
`;

const DivTermsService = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  margin-bottom: 4rem;

  @media (min-width: 1000px) {  
    grid-column: 2/4;
    grid-row: 3/4;
    margin-bottom: 0;
  }
`;

const ListTermsService = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 1000px) {  
    flex-direction: row;
  }
`;

const ItemListTermsService = styled.li`
  color: var(--white);
  font-size: .7em;

  button{
    font-size: 1em;
    
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const DivSocial = styled.div`
  grid-column: 1/2;
  grid-row: 5/6;

  @media (min-width: 1000px) {  
    grid-column: 5/6;
    grid-row: 3/5;
  }
`;

const ListSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemListSocial = styled.li`
  button{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 2px solid var(--white);
    cursor: pointer;

    svg{
      display: grid;
      margin-inline: auto;
      transition: all .2s ease-in-out;
    }

    &:hover{
      svg{
        transform: scale(.8);
      }
    }
  }
`;

export {
  Container,
  DivGrid,
  SocialIcon,
  FooterStyled,
  TrelloLogoFooter,
  LogInFooter,
  NavFooter,
  FooterList,
  ItemList,
  DivLanguage,
  FormStyled,
  SelectStyled,
  DivTermsService,
  ListTermsService,
  ItemListTermsService,
  DivSocial,
  ListSocial,
  ItemListSocial,
};
