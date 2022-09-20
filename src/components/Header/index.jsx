import { useState } from 'react';
import Logo from '/assets/logo.svg';
import NavBar from '../NavBar';
import {
  HeaderStyled, DivStyled, ButtonPrimary, ButtonSecondary, ButtonLogo, ButtonMobile,
} from './styles';

function Header() {
  const [shadow, setShadow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOnMouseEnter = () => setShadow(true);
  const handleOnMouseLeave = () => setShadow(false);

  return (
    <HeaderStyled shadow={shadow}>
      <ButtonLogo
        type="button"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <img src={Logo} alt="Logo Trello" />
      </ButtonLogo>
      <ButtonMobile type="button" openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <span />
        <span />
        <span />
      </ButtonMobile>
      <NavBar setShadow={setShadow} />
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
    </HeaderStyled>
  );
}

export default Header;
