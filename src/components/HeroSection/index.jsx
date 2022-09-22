import HeroMobile from '/assets/hero-mobile.png';
import HeroDesktop from '/assets/hero.png';
import IconVideo from '/assets/video.svg';
import {
  Container, SectionStyled, DivGrid, ColumnLeft, ColumnRight, ButtonVideo,
} from './styles';

function HeroSection() {
  return (
    <SectionStyled>
      <Container>
        <DivGrid>
          <ColumnLeft>
            <h1>Trello helps teams move work forward.</h1>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
            <form action="">
              <input type="email" name="" id="" placeholder="Email" />
              <button type="submit">Sign up - it&apos;s free</button>
            </form>
            <ButtonVideo>
              <span>Watch video</span>
              <img src={IconVideo} alt="Play video" loading="lazy" />
            </ButtonVideo>
          </ColumnLeft>

          <ColumnRight>
            <picture>
              <source type="image/png" media="(min-width: 768px)" srcSet={HeroDesktop} />
              <img src={HeroMobile} alt="" loading="lazy" />
            </picture>
          </ColumnRight>
        </DivGrid>
      </Container>
    </SectionStyled>
  );
}

export default HeroSection;
