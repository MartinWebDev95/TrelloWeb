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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  padding-top: 4rem;
`;

const ColumnLeft = styled.div`

  h1{
    font-size: 2.8em;
    margin-bottom: 1rem;
    color: var(--deepBlue);
  }

  p{
    font-size: 1.2em;
    margin-bottom: 3.5rem;
    line-height: 1.6em;
    color: var(--deepBlue);
  }

  form{
    display: flex;
    flex-direction: row;
    gap: 1rem;

    input{
      padding-inline: 1rem;
      width: 60%;
      border-radius: 5px;
      font-size: 1em;
      border: 1px solid var(--softWhite);

      &:focus{
        outline: 2px solid var(--deepBlue);
      }

      &::placeholder{
        color: #97A6BE;
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
    
      &:hover{
        background-color: #0747A6;
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
  padding-top: 2rem;
  padding-left: 1rem;
  font-size: 1em;

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
`;

const ColumnRight = styled.div`
  picture{
    padding-bottom: 4rem;
    
    img{
      width: 85%;
      margin-inline: auto;
    }
  }
`;

export {
  Container, SectionStyled, DivGrid, ColumnLeft, ColumnRight, ButtonVideo,
};
