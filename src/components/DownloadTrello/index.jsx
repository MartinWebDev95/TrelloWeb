import AppStore from '/assets/app-store.svg';
import PlayStore from '/assets/play-store.svg';
import { SectionStyled, Container, DivStyled } from './styles';

function DownloadTrello() {
  return (
    <SectionStyled>
      <Container>
        <DivStyled>
          <p>Trello also works great on your smaller screen.</p>
          <button type="button">
            <img src={AppStore} alt="App Store" />
          </button>
          <button type="button">
            <img src={PlayStore} alt="Play Store" />
          </button>
        </DivStyled>
      </Container>
    </SectionStyled>
  );
}

export default DownloadTrello;
