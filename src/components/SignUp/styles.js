import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;

  @media (min-width: 576px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }
`;

const SectionStyled = styled.section`
  margin-top: 1rem;

  @media (min-width: 1000px) {
    margin-top: -4rem;
  }
`;

const DivStyled = styled.div`
  width: 80%;
  line-height: 2.6em;
  margin-inline: auto;
  padding-block: 2rem;

  p{
    color: var(--white);
    text-align: center;
    font-size: 1.4em;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const FormStyled = styled.form`
  width: 100%;
  margin-inline: auto;
  display: flex;
  gap: 1rem;

  input, button{
    padding: .8rem 1rem;
    border-radius: 5px;
    border: none;
    font-size: .9em;
  }

  input{
    flex: 1;
    transition: all .3s ease-in-out;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }

    &:focus{
      outline: 3px solid #DFE1E6;
    }
  }

  button{
    color: var(--deepBlue);
    background-color: var(--white);
    transition: all .3s ease-in-out;
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }

    &:hover{
      cursor: pointer;
      background-color: #DEEBFF;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  background: linear-gradient(rgb(64, 50, 148), rgb(76, 154, 255)) no-repeat;
  border-radius: 10px;
`;

export {
  Container,
  SectionStyled,
  DivStyled,
  FormStyled,
  Wrapper,
};
