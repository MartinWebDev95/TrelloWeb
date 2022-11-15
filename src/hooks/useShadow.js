import { useState } from 'react';

function useShadow() {
  const [shadow, setShadow] = useState(false);

  // When the user has not scrolled and the cursor passes over the navbar, a shadow is added
  const handleOnMouseEnter = () => {
    if (window.scrollY > 0) return;
    setShadow(true);
  };

  const handleOnMouseLeave = () => {
    if (window.scrollY > 0) return;
    setShadow(false);
  };

  // When the user scrolls through the page, a shadow is added to the navbar
  const addShadowToTopBar = () => {
    window.scrollY > 0 ? setShadow(true) : setShadow(false);
  };

  window.addEventListener('scroll', addShadowToTopBar);

  return { shadow, handleOnMouseEnter, handleOnMouseLeave };
}

export default useShadow;
