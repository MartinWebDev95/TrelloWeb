import { useState } from 'react';
import Logo from '/assets/logo.svg';
import NavBar from '../NavBar';
import {
  HeaderStyled, ButtonLogo, ButtonMobile,
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
      <NavBar setShadow={setShadow} openMenu={openMenu} />
    </HeaderStyled>
  );
}

export default Header;
