import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  position: fixed;
  width: 100%;
  background-color: var(--white);
  z-index: 9999;

  @media (min-width: 1000px) {
    justify-content: normal;
    padding-right: 0rem;
    gap: 2rem;
    transition: all .5s ease-in-out;

    ${(props) => (props.shadow === true
    ? `-webkit-box-shadow: 0px 2px 20px 2px rgba(168,168,168,1);
        -moz-box-shadow: 0px 2px 20px 2px rgba(168,168,168,1);
        box-shadow: 0px 2px 20px 2px rgba(168,168,168,1);`
    : `-webkit-box-shadow: 0px 0px 0px 0px rgba(0,101,255,0.48);
        -moz-box-shadow: 0px 0px 0px 0px rgba(0,101,255,0.48);
        box-shadow: 0px 0px 0px 0px rgba(0,101,255,0.48);`)}
  }
`;

const ButtonLogo = styled.button`
  background-color: transparent;
  border: none;
  padding-block: 1.2rem;
  cursor: pointer;
`;

const ButtonMobile = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all .3s ease-in-out;

  span{
    position: absolute;
    height: 3px;
    width: 24px;
    background-color: var(--deepBlue);
    transition: all .2s ease-in-out;
  }

  ${(props) => (props.openMenu === true
    ? `span{
        &:nth-child(1){
          top: 10px;
          left: 0;
          transform: rotate(45deg);
        }

        &:nth-child(2){
          top: 10px;
          width: 0px;
          left: 0;
        }

        &:nth-child(3){
          top: 10px;
          left: 0;
          transform: rotate(-45deg);
        }
      }`
    : `span{
        &:nth-child(1){
          top: 2px;
          left: 0;
          transform: rotate(0deg);
        }

        &:nth-child(2){
          top: 10px;
          width: 24px;
          left: 0;
        }

        &:nth-child(3){
          top: 18px;
          left: 0;
          transform: rotate(0deg);
        }
      }`
  )}

  @media (min-width: 1000px) {
    display: none;
  }
`;

export {
  HeaderStyled, ButtonLogo, ButtonMobile,
};
