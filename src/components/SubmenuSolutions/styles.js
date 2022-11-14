import styled from 'styled-components';

const Submenu = styled.ul`
  position: absolute;
  top: 1px;
  left: 0%;
  background-color: var(--white);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  row-gap: 1rem;
  padding-inline: 1rem;
  padding-bottom: 8rem;
  z-index: 1;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  transition: all .3s ease-in-out;

  ${(props) => (props.openSubmenu === 'solutions'
    ? `
      transform: translateX(0%);
    `
    : `
      transform: translateX(200%);
    `
  )}

  ${(props) => (props.openMenu === false && 'transform: translateX(200%);')}

  @media (min-width: 1000px){
    width: 100%;
    transform: translateX(0%);
    background-color: var(--white);
    top: 100%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    row-gap: 0;
    padding-bottom: 0;
    padding-inline: 0;
    z-index: -100;
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.2);

    &::after{
      content: '';
      display: block;
      background-color: rgba(0,0,0, .6);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 100%;
      left: 0;
    }

    ${(props) => (props.openSubmenu === 'solutions'
    ? `
        height: fit-content;
        overflow-y: visible;
      `
    : `
        height: 0;
        overflow-y: hidden;
    `)}

    ${(props) => (props.openMenu === false && 'transform: translateX(0%);')}
  }
`;

const FirstListSubmenuItem = styled.li`
  @media (min-width: 1000px){
    padding: 0rem 4rem 2rem 8rem;
  }
`;

const SecondListSubmenuItem = styled.li`

  @media (min-width: 1000px){
    padding: 1.5rem 8rem 2rem 2rem;
    background-color: #F7F5FF;
  }

  h2{
    font-size: 1em;

    @media (min-width: 1000px){
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--blue);
    }
  }
`;

const ListUseCases = styled.ul`
  display: none;

  @media (min-width: 1000px){
    display: block;
    padding-top: 2rem;

    li:first-of-type{
      button{
        padding-top: 1rem;
      }  
    }
  }
`;

const ButtonSeeUseCases = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  gap: .5rem;

  &:hover{
    cursor: pointer;
    
    svg{
      transition: all .2s ease-in-out;
      transform: translateX(15%);
    }
  }

  @media (min-width: 1000px){
    display: flex;
    align-items: center;  
    
    p{
      color: #505F79;
      font-size: 1.1em;
      font-weight: bold;
    }
  }
`;

const TitleSubmenu = styled.h2`
  font-size: 1em;
  padding-block: 1rem;

  @media (min-width: 1000px){
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
    border-bottom: 1px solid var(--softWhite);
  }
`;

const Features = styled.ul`
  display: flex;
  flex-direction: column;

  li{
    width: 100%;

    @media (min-width: 1000px){
      width: 31%;
      border-top: 0px;
      padding-block: 0;
    } 

    &:last-of-type{
      border-bottom: 1px solid var(--softWhite); 
      
      @media (min-width: 1000px){
        border-bottom: 0px;
      } 
    }

    div{
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1000px){
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2rem;
    column-gap: 1rem;
  }
`;

const FeaturesButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  padding-block: 1rem;
  border-top: 1px solid var(--softWhite);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover{
    cursor: pointer;
  }

  @media (min-width: 1000px){
    width: fit-content;
    height: 160px;
    padding-block: 0;
    padding: 1rem;
    border-top: 0px;
    transition: all .2s ease-in-out;

    &:hover{
      background-color: #F7F5FF;
    }
  }
`;

const ButtonSeeAllFeatures = styled(ButtonSeeUseCases)`
  display: flex;
  align-items: center;
  padding-block: 1rem;
  width: 100%;
  border-top: 1px solid var(--softWhite);

  @media (min-width: 1000px){
    margin-left: 1rem;
    border-top: 0px;
  }
`;

const FeaturesTitle = styled.h3`
  color: #505F79;
  font-size: 1.2em;
  text-align: left;
`;

const FeaturesInfo = styled.p`
  color: #505F79;
  font-size: 1em;
  line-height: 1.4em;
  text-align: left;
`;

const UseCasesButton = styled(FeaturesButton)`
  padding: 0;
  height: fit-content;
  padding-bottom: 2rem;

  &:hover{
    svg{
      opacity: 1;
    }
  }
`;

const UseCasesTitle = styled(FeaturesTitle)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: .5rem;

  svg{
    opacity: 0;
  }
`;

const UseCasesInfo = styled(FeaturesInfo)``;

export {
  Submenu,
  TitleSubmenu,
  FirstListSubmenuItem,
  SecondListSubmenuItem,
  Features,
  FeaturesTitle,
  FeaturesInfo,
  ListUseCases,
  ButtonSeeUseCases,
  ButtonSeeAllFeatures,
  UseCasesInfo,
  UseCasesTitle,
  FeaturesButton,
  UseCasesButton,
};
