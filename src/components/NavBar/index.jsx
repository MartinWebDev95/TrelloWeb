import Arrow from '/assets/arrow.svg';
import { NavStyled, List, ListItem } from './styles';

function NavBar({ setShadow }) {
  const handleOnMouseEnter = () => setShadow(true);
  const handleOnMouseLeave = () => setShadow(false);

  return (
    <NavStyled>
      <List>
        <ListItem onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <button type="button">Features</button>
          <img src={Arrow} alt="Arrow" />
        </ListItem>
        <ListItem onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <button type="button">Solutions</button>
          <img src={Arrow} alt="Arrow" />
        </ListItem>
        <ListItem onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <button type="button">Plans</button>
          <img src={Arrow} alt="Arrow" />
        </ListItem>
        <ListItem onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <button type="button">Pricing</button>
        </ListItem>
        <ListItem onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <button type="button">Resources</button>
          <img src={Arrow} alt="Arrow" />
        </ListItem>
      </List>
    </NavStyled>
  );
}

export default NavBar;
