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

const Title = styled.h5`
  font-size: 1.3em;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.2em;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const Info = styled.p`
  font-size: 1.2em;
  padding-bottom: 4rem;
  line-height: 1.6em;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const DivFeatures = styled.div`
  margin-block: 4rem;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;

  &:last-of-type{
    margin-bottom: 0rem;
  }

  button{
    background-color: transparent;
    border: none;
    color: var(--deepBlue);
    font-weight: bold;
    font-size: 1.1em;

    &:hover{
      cursor: pointer;
    }
  }

  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    ${(props) => (props.positionImg === 'left'
    ? (`
        img{
          width: 45%;
          order: 1;
        }

        div{
          order: 2;
        }
      `)
    : (`
        img{
          width: 45%;
          order: 2;
        }

        div{
          order: 1;
        }
      `))}

    button{
      font-size: 1.2em;
    }
  }

  @media (min-width: 1000px) {
    gap: 2rem;
    
    img{
      width: 40%;
    }
  }
`;

const SubtitleFeature = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const TitleFeature = styled.h6`
  font-size: 1.4em;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const InfoFeature = styled.p`
  font-size: 1.2em;
  color: #5E6E98;
  margin-block: 1.5rem;
  line-height: 1.6em;
`;

const LearnMoreInfo = styled.div`
  font-size: 1em;
  line-height: 1.6em;
  width: 95%;
  margin-inline: auto;
  transition: opacity .2s ease-in-out, height .4s ease-in-out;
  ${(props) => (props.openLearnMore !== 'view'
    ? `
      height: 0;
      opacity: 0;
      overflow-y: hidden;
    `
    : `
      height: 50vh;
      opacity: 1;
      overflow-y: visible;
    `
  )}
  
  p{
    margin-top: 1rem;
  }

  ul{
    list-style: disc;
    margin-top: 1rem;
    width: 80%;
    margin-inline: auto;
  }

  button{
    margin-top: 2rem;
    text-decoration: underline;
    color: var(--blue);
    background-color: transparent;
    border: none;
    font-weight: normal;
  }
`;

const LearnMoreInfoTwo = styled(LearnMoreInfo)`
  ${(props) => (props.openLearnMore !== 'details'
    ? `
      height: 0;
      opacity: 0;
    `
    : `
      height: 60vh;
      opacity: 1;
    `
  )}
`;

const LearnMoreInfoThree = styled(LearnMoreInfo)`
  ${(props) => (props.openLearnMore !== 'butler'
    ? `
      height: 0;
      opacity: 0;
    `
    : `
      height: 50vh;
      opacity: 1;
    `
  )}
`;

const LearnMoreInfoFour = styled(LearnMoreInfo)`
  ${(props) => (props.openLearnMore !== 'power-ups'
    ? `
      height: 0;
      opacity: 0;
    `
    : `
      height: 60vh;
      opacity: 1;
    `
  )}
`;

export {
  Container,
  Title,
  Info,
  Feature,
  SubtitleFeature,
  TitleFeature,
  InfoFeature,
  DivFeatures,
  LearnMoreInfo,
  LearnMoreInfoTwo,
  LearnMoreInfoThree,
  LearnMoreInfoFour,
};
