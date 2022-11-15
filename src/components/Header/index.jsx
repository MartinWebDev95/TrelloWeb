import { useState } from 'react';

import Logo from '/assets/logo.svg';

import NavBar from '../NavBar';

import useShadow from '../../hooks/useShadow';
import useMenu from '../../hooks/useMenu';

import {
  HeaderStyled, ButtonLogo, ButtonMobile, ButtonBack, DivStyled,
} from './styles';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState('');
  const { shadow, handleOnMouseEnter, handleOnMouseLeave } = useShadow();
  const {
    handleClickOpenMenu,
    handleClickBack,
  } = useMenu(openSubmenu, setOpenSubmenu, setOpenMenu);

  return (
    <HeaderStyled
      shadow={shadow}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >

      <DivStyled>
        <ButtonLogo
          type="button"
          aria-hidden={openSubmenu !== ''}
          openMenu={openMenu}
        >
          <img src={Logo} alt="Logo Trello" />
        </ButtonLogo>

        <ButtonBack
          type="button"
          aria-hidden={openSubmenu === ''}
          openMenu={openMenu}
          onClick={handleClickBack}
        >
          <svg fill="#000" height="15" viewBox="0 0 13 8" width="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z" />

          </svg>
          Back
        </ButtonBack>
      </DivStyled>

      <ButtonMobile
        type="button"
        openMenu={openMenu}
        onClick={handleClickOpenMenu}
      >
        <span />
        <span />
        <span />
      </ButtonMobile>

      <NavBar
        openMenu={openMenu}
        openSubmenu={openSubmenu}
        setOpenSubmenu={setOpenSubmenu}
      />

    </HeaderStyled>
  );
}

export default Header;
