import styled from 'styled-components';

const NavStyled = styled.nav`
  display: none;
  
  @media (min-width: 1000px) {
    flex: 1;
    display: block;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-block: 1.2rem;
  cursor: pointer;

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1em;
  }
  
  img{
    width: 8px;
    height: 8px;
  }

  &:hover{
    button{
      color: var(--blue);
    }
  }
`;

export { NavStyled, List, ListItem };
