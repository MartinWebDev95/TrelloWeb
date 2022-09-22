import IconCompass from '/assets/compass.svg';
import IconSolutions from '/assets/solutions.svg';
import IconTags from '/assets/tag.svg';
import {
  Container, Card, DivGrid, CardInfo,
} from './styles';

function InfoSection() {
  return (
    <section>
      <Container>
        <DivGrid>
          <Card>
            <img src={IconTags} alt="Tags" />
            <CardInfo>
              <h3>See Trello pricing</h3>
              <p>
                Whether you’re a team of 2 or 2,000, Trello can be
                customized for your organization. Explore which option
                is best for you.
              </p>
              <button type="button">Compare pricing</button>
            </CardInfo>
          </Card>
          <Card>
            <img src={IconCompass} alt="Compass" />
            <CardInfo>
              <h3>What is Trello?</h3>
              <p>
                Trello is the visual tool that empowers your team to
                manage any type of project, workflow, or task tracking.
              </p>
              <button type="button">Tour Trello</button>
            </CardInfo>
          </Card>
          <Card>
            <img src={IconSolutions} alt="Solutions" />
            <CardInfo>
              <h3>Discover Trello Enterprise</h3>
              <p>
                The productivity tool teams love, paired with the features
                and security needed for scale.
              </p>
              <button type="button">Learn more</button>
            </CardInfo>
          </Card>
        </DivGrid>
      </Container>
    </section>
  );
}

export default InfoSection;
