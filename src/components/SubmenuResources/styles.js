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
  padding-bottom: 1rem;
  z-index: 1;
  overflow-y: auto;
  height: 100%;
  transition: all .3s ease-in-out;

  ${(props) => (props.openSubmenu === 'resources'
    ? `
      transform: translateX(0%);
    `
    : `
      transform: translateX(100%);
    `
  )}

  ${(props) => (props.openMenu === false && 'transform: translateX(100%);')}

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

    ${(props) => (props.openSubmenu === 'resources'
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
    padding: 0rem 4rem 8rem 8rem;
  }
`;

const SecondListSubmenuItem = styled.li`
  background-color: #F7F5FF;
  padding: 1.5rem;

  @media (min-width: 1000px){
    padding: 1.5rem 8rem 2rem 2rem;
  }

  h2{
    font-size: 1em;
    
    @media (min-width: 1000px){
      border-bottom: 1px solid var(--blue);
      padding-bottom: 1rem;
    }
  }
`;

const TitleSubmenu = styled.h2`
  font-size: 1em;
  padding-block: 1.5rem;

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

  @media (min-width: 1000px){
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2rem;
    row-gap: 1rem;
  }
`;

const ListItem = styled.li`
  width: 100%;

  &:last-of-type{
    border-bottom: 1px solid var(--softWhite);
  }

  @media (min-width: 1000px){
    width: 33%;

    &:last-of-type{
      border-bottom: 0px;
    }
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
    height: 120px;
    padding-block: 0;
    padding: 1rem;
    border-top: 0px;
    transition: all .2s ease-in-out;

    &:hover{
      background-color: #F7F5FF;
    }
  }
`;

const ListItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FeaturesTitle = styled.h3`
  color: #505F79;
  font-size: 1.1em;
  text-align: left;
`;

const FeaturesInfo = styled.p`
  color: #505F79;
  font-size: .9em;
  line-height: 1.4em;
  text-align: left;
`;

const ButtonMoreBlogPosts = styled.button`
  display: flex;
  align-items: center;  
  background-color: transparent;
  border: none;
  gap: .5rem;
  margin-bottom: 2rem;

  p{
    color: #505F79;
    font-size: 1.1em;
    font-weight: bold;
  }

  &:hover{
    cursor: pointer;
    
    svg{
      transition: all .2s ease-in-out;
      transform: translateX(15%);
    }
  }

  @media (min-width: 1000px){  
    margin-bottom: 0;
  }
`;

const Card = styled.button`
  border: none;
  border-radius: 10px;
  margin-block: 2rem;
  transition: all .3s ease-in-out;

  img{
    border-radius: 10px 10px 0px 0px;
  }

  &:hover{
    cursor: pointer;
    -webkit-box-shadow: 0px 10px 20px -1px rgba(140,140,140,1);
    -moz-box-shadow: 0px 10px 20px -1px rgba(140,140,140,1);
    box-shadow: 0px 10px 20px -1px rgba(140,140,140,1);
  }
`;

const CardInfo = styled.div`
  background-color: var(--white);
  border-radius: 0px 0px 10px 10px;
  text-align: left;
  padding: 1rem;

  p:first-of-type{
    font-size: .8em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: #505F79;
  }

  p:last-of-type{
    color: #505F79;
    font-size: .9em;

    @media (min-width: 1000px){  
      font-size: 1.1em;
      color: var(--deepBlue);
    }
  }
`;

const DivHelpingTeams = styled.div`
  @media (min-width: 1000px){
    display: none;
  }

  p{
    color: #505F79;
    font-size: .7em;
    padding-block: 1rem;
    line-height: 1.8em;
  }

  button{
    background-color: var(--white);
    border: 1px solid var(--blue);
    padding: 1rem;
    border-radius: 5px;
    font-size: 1em;
    transition: all .2s ease-in-out;

    &:hover{
      background-color: #EAE6FF;
      cursor: pointer;
    }
  }
`;

export {
  Submenu,
  TitleSubmenu,
  FirstListSubmenuItem,
  SecondListSubmenuItem,
  Features,
  FeaturesTitle,
  FeaturesInfo,
  ListItem,
  ListItemTitle,
  FeaturesButton,
  ButtonMoreBlogPosts,
  Card,
  CardInfo,
  DivHelpingTeams,
};
