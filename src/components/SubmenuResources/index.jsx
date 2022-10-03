import Blog from '/assets/blog-trello.webp';
import {
  Submenu,
  TitleSubmenu,
  FirstListSubmenuItem,
  SecondListSubmenuItem,
  Features,
  FeaturesTitle,
  FeaturesInfo,
  ListItem,
  ListItemTitle,
  ButtonMoreBlogPosts,
  FeaturesButton,
  Card,
  CardInfo,
  DivHelpingTeams,
} from './styles';

function SubmenuResources({ openSubmenu, openMenu }) {
  return (
    <Submenu openSubmenu={openSubmenu} openMenu={openMenu}>
      <FirstListSubmenuItem>
        <TitleSubmenu>Learn & connect</TitleSubmenu>
        <Features>
          <ListItem>
            <FeaturesButton type="button">
              <ListItemTitle>
                <FeaturesTitle>Trello guide</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                Our easy to follow workflow guide will take you from
                project set-up to Trello expert in no time.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton type="button">
              <ListItemTitle>
                <FeaturesTitle>Remote work guide</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                The complete guide to setting up your team for remote work success.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton type="button">
              <ListItemTitle>
                <FeaturesTitle>Webinars</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                Enjoy our free Trello webinars and become a productivity professional.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton type="button">
              <ListItemTitle>
                <FeaturesTitle>Customer stories</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                See how businesses have adopted Trello as a vital part of their workflow.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton type="button">
              <ListItemTitle>
                <FeaturesTitle>Developers</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                The sky&apos;s the limit in what you can deliver to Trello users in your Power-Up!
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton type="button">
              <ListItemTitle>
                <FeaturesTitle>Help resources</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                Need help? Articles and FAQs to get you unstuck.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
        </Features>
      </FirstListSubmenuItem>
      <SecondListSubmenuItem>
        <div>
          <h2>Latest from the Trello blog</h2>
          <Card type="button">
            <img src={Blog} alt="Blog Trello" />
            <CardInfo>
              <p>Ejemplo de uso | Teletrabajo</p>
              <p>
                El trío ideal: cómo dirigir a un equipo remoto
                o híbrido con Trello, Slack y Confluence
              </p>
            </CardInfo>
          </Card>
          <ButtonMoreBlogPosts type="button">
            <p>
              More blog posts
            </p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="arrow-right">
              <rect width="24" height="24" fill="#fff" fillOpacity="0.01" />
              <path fillRule="evenodd" clipRule="evenodd" d="M11.793 5.79298C11.7001 5.88577 11.6263 5.99597 11.576 6.11729C11.5257 6.2386 11.4998 6.36865 11.4998 6.49998C11.4998 6.63131 11.5257 6.76136 11.576 6.88267C11.6263 7.00399 11.7001 7.11419 11.793 7.20698L15.586 11H6C5.73478 11 5.48043 11.1053 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H15.586L11.793 16.793C11.7001 16.8858 11.6263 16.996 11.576 17.1173C11.5257 17.2386 11.4998 17.3686 11.4998 17.5C11.4998 17.6313 11.5257 17.7614 11.576 17.8827C11.6263 18.004 11.7001 18.1142 11.793 18.207C12.183 18.597 12.817 18.597 13.208 18.207L18.707 12.707C18.8881 12.5266 18.993 12.2835 19 12.028V11.971C18.9928 11.7158 18.888 11.4731 18.707 11.293L13.208 5.79298C13.1151 5.70001 13.0048 5.62625 12.8834 5.57592C12.762 5.5256 12.6319 5.49969 12.5005 5.49969C12.3691 5.49969 12.239 5.5256 12.1176 5.57592C11.9962 5.62625 11.8859 5.70001 11.793 5.79298Z" fill="rgba(0, 101, 255, 1)" />
            </svg>
          </ButtonMoreBlogPosts>
        </div>
        <DivHelpingTeams>
          <h2>Helping teams work better, together</h2>
          <p>
            Discover Trello use cases, productivity tips, best practices
            for team collaboration, and expert remote work advice.
          </p>
          <button type="button">Check out the Trello blog</button>
        </DivHelpingTeams>
      </SecondListSubmenuItem>
    </Submenu>
  );
}

export default SubmenuResources;
