import BoardDesktop from '/assets/board-desktop.webp';
import BoardMobile from '/assets/board-mobile.webp';
import Google from '/assets/Google.svg';
import Coinbase from '/assets/coinbase.svg';
import Visa from '/assets/Visa.svg';
import JohnDeere from '/assets/johnDeere.svg';
import GrandHyatt from '/assets/Grand-Hyatt.svg';
import Zoom from '/assets/Zoom.png';

import {
  Container,
  Title,
  Info,
  Button,
  SectionStyled,
  ImageStyled,
  Subtitle,
  DivCompanies,
  DivStyled,
} from './styles';

function TrustedCompaniesSection() {
  return (
    <SectionStyled>
      <Container>
        <Title>It’s more than work. It’s a way of working together.</Title>
        <Info>
          Start with a Trello board, lists, and cards. Customize
          and expand with more features as your teamwork grows.
          Manage projects, organize tasks, and build team
          spirit—all in one place.
        </Info>
        <Button type="button">Start doing</Button>

        <DivStyled>
          <ImageStyled>
            <source type="image/webp" srcSet={BoardDesktop} media="(min-width: 768px)" />
            <source type="image/webp" srcSet={BoardMobile} />
            <img src={BoardMobile} alt="Trello Board" loading="lazy" />
          </ImageStyled>
          <Subtitle>
            Join over 2,000,000 teams worldwide that are
            using Trello to get more done.
          </Subtitle>
          <DivCompanies>
            <img src={Coinbase} alt="Coinbase Logo" />
            <img src={JohnDeere} alt="John Deere Logo" />
            <img src={GrandHyatt} alt="Grand Hyatt Logo" />
            <img src={Google} alt="Google Logo" />
            <img src={Visa} alt="Visa Logo" />
            <img src={Zoom} alt="Zoom Logo" />
          </DivCompanies>
        </DivStyled>
      </Container>
    </SectionStyled>
  );
}

export default TrustedCompaniesSection;
