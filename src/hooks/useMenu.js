function useMenu(openSubmenu, setOpenSubmenu, setOpenMenu) {
  const handleClickOpenMenu = () => {
    // Change the menu state to open or closed
    setOpenMenu((previousState) => {
      if (previousState) {
        document.body.style = 'overflow: auto';
        return false;
      }

      document.body.style = 'overflow: hidden';
      return true;
    });

    if (openSubmenu === '') return;

    // When the menu is closed, if there is an open submenu, it also closed
    setOpenSubmenu('');
  };

  // Submenu is closed
  const handleClickBack = () => setOpenSubmenu('');

  const handleOpenSubmenu = (e) => {
    // Manage what submenu opens
    setOpenSubmenu((previousState) => {
      if (previousState === e.target.value) {
        document.body.style = 'overflow: auto';
        return '';
      }

      document.body.style = 'overflow: hidden';
      return e.target.value;
    });
  };

  return {
    handleClickOpenMenu, handleClickBack, handleOpenSubmenu,
  };
}

export default useMenu;
