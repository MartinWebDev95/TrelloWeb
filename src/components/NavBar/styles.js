import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding-inline: 1rem;
  overflow-x: hidden;
  transition: all .7s ease-in-out;
  background-color: var(--white);
  z-index: 200;

  @media (min-width: 1000px) {
    justify-content: space-between;
    flex: 1;
    position: static;
    width: auto;
    overflow: visible;
    padding-inline: 0;
    flex-direction: row;
    transition: all 0s ease-in-out;

    ${(props) => (props.openMenu && 'height: 0;')}
  }

  ${(props) => (props.openMenu
    ? `
      height: 90vh;
      `
    : `
      height: 0;
      `
  )}

  ${(props) => (props.openSubmenu !== ''
    ? `
      overflow-y: hidden;
    `
    : `
      overflow-y: auto;
    `
  )}
`;

const List = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  @media (min-width: 1000px) {
    align-items: center;
    gap: 2rem;
    flex-direction: row;
  }
`;

const DivNameMenuContainer = styled.div`
  @media (min-width: 1000px) {
    &::after{
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      background-color: var(--blue);
      transition: all .3s ease-in-out;
    }

    &[aria-selected=true]::after{
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;

  img{
    width: 12px;
    height: 12px;
    transform: rotate(-90deg);
  }

  @media (min-width: 1000px) {
    gap: .5rem;
    justify-content: normal;
    width: auto;
    border-top: 0px;

    img{
      width: 8px;
      height: 8px;
      transform: rotate(0deg);
    }
  }
`;

const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  width: 100%;
  padding-block: 1.4rem;
  text-align: left;

  @media (min-width: 1000px) {
    font-size: 1em;
    width: auto;
    display: block;
    padding-block: 1.2rem;

    &:hover{
      color: var(--blue);
    }

    &[aria-selected=true]{
      color: var(--blue);
    }
  }
`;

const ListItemMenu = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--softWhite);
  
  &:first-of-type{
    border-top: 1px solid var(--softWhite);
  }

  @media (min-width: 1000px) {
    width: auto;
    border-bottom: 0px;

    &:first-of-type{
      border-top: 0px;
    }

    &:last-of-type{
      border-bottom: 0px;
    }
  }
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 0rem;
    margin-block: 0rem;
  }  
`;

const ButtonPrimary = styled.button`
  background-color: var(--blue);
  color: var(--white);
  border: none;
  padding-block: 1.2rem;
  padding-inline: 2rem;
  font-size: 1.2em;
  width: 100%;
  order: 1;
  cursor: pointer;

  &:hover{
    background-color: #0747A6;
  }

  @media (min-width: 1000px) {
    width: auto;
    order: 2;
    font-size: 1.1em;
  } 
`;

const ButtonSecondary = styled(ButtonPrimary)`
  background-color: transparent;
  color: var(--deepBlue);
  order: 2;
  border: 1px solid var(--blue);

  &:hover{
    background-color: transparent;
    color: var(--blue);
  }

  @media (min-width: 1000px) {
    order: 1;
    border: 0px;

    &:hover{
      background-color: transparent;
      color: var(--deepBlue);
    }
  } 
`;

export {
  NavStyled,
  List,
  ListItemMenu,
  DivStyled,
  ButtonPrimary,
  ButtonSecondary,
  DivNameMenuContainer,
  ButtonMenu,
  Wrapper,
};
