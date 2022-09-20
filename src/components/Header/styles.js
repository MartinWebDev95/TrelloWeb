import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

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

const DivStyled = styled.div`
  display: none;
  
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;

const ButtonPrimary = styled.button`
  background-color: var(--blue);
  color: var(--white);
  border: none;
  padding-block: 1.2rem;
  padding-inline: 2rem;
  font-size: 1.1em;
  cursor: pointer;

  &:hover{
    background-color: #0747A6;
  }
`;

const ButtonSecondary = styled(ButtonPrimary)`
  background-color: transparent;
  color: var(--deepBlue);

  &:hover{
    background-color: transparent;
  }
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
  HeaderStyled, ButtonLogo, DivStyled, ButtonPrimary, ButtonSecondary, ButtonMobile,
};
