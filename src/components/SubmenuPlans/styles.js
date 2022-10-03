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

  ${(props) => (props.openSubmenu === 'plans'
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

    ${(props) => (props.openSubmenu === 'plans'
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
    padding: 0rem 4rem 4rem 8rem;
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

  p{
    color: #505F79;
    font-size: .7em;
    padding-block: 1rem;
    line-height: 1.8em;

    @media (min-width: 1000px){
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
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

const Features = styled.ul`
  display: flex;
  flex-direction: column;

  li:last-of-type{
    padding-top: 1rem;
  }

  @media (min-width: 1000px){
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 2rem;
    row-gap: 1rem;
    column-gap: 1rem;

    li:last-of-type{
      padding-top: 0rem;
    }
  }
`;

const FeaturesButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--softWhite);
  padding-block: 1rem;
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
    border-bottom: 0px;
    transition: all .2s ease-in-out;

    &:hover{
      background-color: #F7F5FF;
    }
  }
`;

const ListItem = styled.li`
  width: 100%;

  @media (min-width: 1000px){
    width: 30%;

    &:last-of-type{
      width: 100%;
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
  font-size: 1.2em;
  text-align: left;
`;

const FeaturesInfo = styled.p`
  color: #505F79;
  font-size: .9em;
  line-height: 1.4em;
  text-align: left;
`;

const Wrapper = styled.div`
  background-color: #FFFDF5;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 1000px){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }

  h3{
    font-size: 1em;
  }

  p{
    font-size: .7em;
  }

  button{
    background-color: var(--white);
    border: 1px solid #ffc400;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1em;
    transition: all .2s ease-in-out;
    margin-top: 2rem;

    &:hover{
      background-color: #FFFAE5;
      cursor: pointer;
    }

    @media (min-width: 1000px){
      margin-top: 0;
    }
  }
`;

export {
  Submenu,
  FirstListSubmenuItem,
  SecondListSubmenuItem,
  Features,
  FeaturesTitle,
  FeaturesInfo,
  FeaturesButton,
  ListItem,
  ListItemTitle,
  Wrapper,
};
