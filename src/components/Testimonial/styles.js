import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Text = styled.blockquote`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.6em;
  color: var(--deepBlue);

  &::before{
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    margin-top: .5rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${(props) => (props.quotes)});

    @media (min-width: 1000px){
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 768px){
    font-size: 2em;
  }

  @media (min-width: 1000px){
    flex-direction: row;
    font-size: 2.2em;
    gap: 2rem;
  }
`;

const SubtitleImg = styled.figcaption`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;

  img{
    width: 35%;

    @media (min-width: 768px){
      width: 30%;
    }

    @media (min-width: 100px){
      width: 20%;
    }
  }

  img[alt~="Detroit_Red_Wings"] {
    width: 30%;

    @media (min-width: 768px){
      width: 25%;
    }

    @media (min-width: 100px){
      width: 15%;
    }
  }

  img[alt~="Sprout_Social"]{
    width: 20%;

    @media (min-width: 100px){
      width: 15%;
    }
  }

  @media (min-width: 1000px){
    flex-direction: row;
    align-items: center;
    gap: 0rem;
  }
`;

const Author = styled.p`
  span{
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const Industry = styled.p`
  span{
    font-weight: bold;
  }
`;

export {
  Wrapper, Author, Industry, Text, SubtitleImg,
};
