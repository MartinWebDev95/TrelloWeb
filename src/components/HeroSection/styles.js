import styled from 'styled-components';

const SectionStyled = styled.section`
  padding-top: 4rem;
  background: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255)) no-repeat;
`;

const Container = styled.div`
  width: 85%;
  margin-inline: auto;
  padding-inline: 1rem;
`;

const DivGrid = styled.div`
  display: grid;
  grid-row: 2;
  align-items: center;
  gap: 2rem;
  padding-block: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
`;

const ColumnLeft = styled.div`
  order: 2;

  @media (min-width: 768px) {
    order: 1;
  }

  h1{
    font-size: 2em;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--deepBlue);

    @media (min-width: 768px) {
      font-size: 2.4em;
      text-align: left;
      padding-top: 2rem;
    }
    
    @media (min-width: 1000px) {
      font-size: 2.8em;
    }
  }

  p{
    font-size: 1.2em;
    margin-bottom: 3.5rem;
    line-height: 1.6em;
    color: var(--deepBlue);
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: 90%;
      text-align: left;
    }
  }

  form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;

    input{
      padding: 1rem;
      width: 90%;
      border-radius: 5px;
      font-size: 1em;
      border: 1px solid var(--softWhite);
      display: none;

      &:focus{
        outline: 2px solid var(--deepBlue);
      }

      &::placeholder{
        color: #97A6BE;
      }

      @media (min-width: 768px) {
        display: block;
      }

      @media (min-width: 1000px) {
        width: 55%;
      }
    }

    button{
      background-color: var(--blue);
      color: var(--white);
      border: none;
      border-radius: 5px;
      padding-block: 1rem;
      padding-inline: 1.5rem;
      font-size: 1em;
      order: 1;
      cursor: pointer;
      transition: all .2s ease-in-out;
      width: 100%;
    
      &:hover{
        background-color: #0747A6;
      }

      @media (min-width: 768px) {
        width: auto;
      }
    }
  }
`;

const ButtonVideo = styled.button`
  display: flex;
  align-items: center;
  gap: .5rem;
  background-color: transparent;
  border: none;
  padding-top: 1rem;
  font-size: 1em;
  margin-inline: auto;

  span{
    text-decoration: underline;
    color: var(--blue);
  }

  &:hover{
    cursor: pointer;
    
    img{
      transform: translateX(10%);
      transition: all .3s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    padding-left: 1rem;
    margin-inline: inherit;
  }

  @media (min-width: 1000px) {
    padding-top: 2rem;
  }
`;

const ColumnRight = styled.div`
  order: 1;

  @media (min-width: 768px) {
    order: 2;
  }

  picture{
    img{
      margin-inline: auto;
    }
  }
`;

export {
  Container, SectionStyled, DivGrid, ColumnLeft, ColumnRight, ButtonVideo,
};
