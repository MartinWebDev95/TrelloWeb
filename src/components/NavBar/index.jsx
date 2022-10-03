import SubmenuFeatures from '../SubmenuFeatures';
import SubmenuSolutions from '../SubmenuSolutions';
import SubmenuPlans from '../SubmenuPlans';
import SubmenuResources from '../SubmenuResources';
import Arrow from '/assets/arrow.svg';
import {
  NavStyled,
  List,
  ListItemMenu,
  DivStyled,
  ButtonPrimary,
  ButtonSecondary,
  DivNameMenuContainer,
  ButtonMenu,
  Wrapper,
} from './styles';

function NavBar({
  setShadow, openMenu, setOpenSubmenu, openSubmenu,
}) {
  const handleOnMouseEnter = () => setShadow(true);
  const handleOnMouseLeave = () => setShadow(false);

  const handleOpenSubmenu = (e) => {
    setOpenSubmenu((previousState) => {
      if (previousState === e.target.value) {
        document.body.style = 'overflow: auto';
        return '';
      }

      document.body.style = 'overflow: hidden';
      return e.target.value;
    });
  };

  return (
    <NavStyled openMenu={openMenu} openSubmenu={openSubmenu}>
      <List>
        <ListItemMenu onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <DivNameMenuContainer
            aria-selected={openSubmenu === 'features'}
          >
            <Wrapper>
              <ButtonMenu
                type="button"
                value="features"
                aria-selected={openSubmenu === 'features'}
                onClick={handleOpenSubmenu}
              >
                Features
              </ButtonMenu>
              <img src={Arrow} alt="Arrow" />
            </Wrapper>
          </DivNameMenuContainer>

          <SubmenuFeatures
            openSubmenu={openSubmenu}
            openMenu={openMenu}
          />

        </ListItemMenu>
        <ListItemMenu onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <DivNameMenuContainer
            aria-selected={openSubmenu === 'solutions'}
          >
            <Wrapper>
              <ButtonMenu
                type="button"
                value="solutions"
                aria-selected={openSubmenu === 'solutions'}
                onClick={handleOpenSubmenu}
              >
                Solutions
              </ButtonMenu>
              <img src={Arrow} alt="Arrow" />
            </Wrapper>
          </DivNameMenuContainer>

          <SubmenuSolutions
            openSubmenu={openSubmenu}
            openMenu={openMenu}
          />

        </ListItemMenu>
        <ListItemMenu onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <DivNameMenuContainer
            aria-selected={openSubmenu === 'plans'}
          >
            <Wrapper>
              <ButtonMenu
                type="button"
                value="plans"
                aria-selected={openSubmenu === 'plans'}
                onClick={handleOpenSubmenu}
              >
                Plans
              </ButtonMenu>
              <img src={Arrow} alt="Arrow" />
            </Wrapper>
          </DivNameMenuContainer>

          <SubmenuPlans
            openSubmenu={openSubmenu}
            openMenu={openMenu}
          />

        </ListItemMenu>
        <ListItemMenu onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <DivNameMenuContainer>
            <ButtonMenu
              type="button"
            >
              Pricing
            </ButtonMenu>
          </DivNameMenuContainer>
        </ListItemMenu>
        <ListItemMenu onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <DivNameMenuContainer
            aria-selected={openSubmenu === 'resources'}
          >
            <Wrapper>
              <ButtonMenu
                type="button"
                value="resources"
                aria-selected={openSubmenu === 'resources'}
                onClick={handleOpenSubmenu}
              >
                Resources
              </ButtonMenu>
              <img src={Arrow} alt="Arrow" />
            </Wrapper>
          </DivNameMenuContainer>

          <SubmenuResources
            openSubmenu={openSubmenu}
            openMenu={openMenu}
          />

        </ListItemMenu>
      </List>
      <DivStyled>
        <ButtonSecondary
          type="button"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          Log in
        </ButtonSecondary>
        <ButtonPrimary
          type="button"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          Get Trello for free
        </ButtonPrimary>
      </DivStyled>
    </NavStyled>
  );
}

export default NavBar;
