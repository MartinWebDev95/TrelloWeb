import ViewFeature from '/assets/view.svg';
import AutomationFeature from '/assets/automation.png';
import CardFeature from '/assets/card-back.svg';
import PowerUpsFeature from '/assets/power-ups.png';
import {
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
} from './styles';
import { useState } from 'react';

function FeaturesSection() {
  const [openLearnMore, setOpenLearnMore] = useState('');

  return (
    <section>
      <Container>
        <Title>Features to help your team succeed</Title>
        <Info>
          Powering a productive team means using a powerful tool
          (and plenty of snacks). From meetings and projects to
          events and goal setting, Trello’s intuitive features
          give any team the ability to quickly set up and customize
          workflows for just about anything.
        </Info>

        <DivFeatures>
          <Feature positionImg="left">
            <img src={ViewFeature} alt="View Feature" />
            <div>
              <SubtitleFeature>Choose a view</SubtitleFeature>
              <TitleFeature>The board is just the beginning</TitleFeature>
              <InfoFeature>
                Lists and cards are the building blocks of organizing
                work on a Trello board. Grow from there with task
                assignments, timelines, productivity metrics,
                calendars, and more.
              </InfoFeature>
              <button
                type="button"
                name="view"
                onClick={(e) => {
                  setOpenLearnMore(openLearnMore === 'view' ? '' : e.target.name);
                }}
              >
                {openLearnMore === 'view' ? '- Learn more' : '+ Learn more'}
              </button>
              <LearnMoreInfo openLearnMore={openLearnMore}>
                <p>
                  You and your team can start up a Trello board in
                  seconds. With the ability to view board data from
                  many different angles, the entire team stays
                  up-to-date in the way that suits them best:
                </p>
                <ul>
                  <li>
                    Use a Timeline view for project planning
                  </li>
                  <li>
                    Calendar helps with time management
                  </li>
                  <li>
                    Table view connects work across boards
                  </li>
                  <li>
                    See board stats with Dashboard, and more!
                  </li>
                </ul>
                <button type="button">
                  Learn more about views
                </button>
              </LearnMoreInfo>
            </div>
          </Feature>
          <Feature positionImg="right">
            <img src={CardFeature} alt="View Feature" />
            <div>
              <SubtitleFeature>Dive into the details</SubtitleFeature>
              <TitleFeature>Cards contain everything you need</TitleFeature>
              <InfoFeature>
                Trello cards are your portal to more organized work—where
                every single part of your task can be managed, tracked, and
                shared with teammates. Open any card to uncover an ecosystem
                of checklists, due dates, attachments, conversations, and more.
              </InfoFeature>
              <button
                type="button"
                name="details"
                onClick={(e) => {
                  setOpenLearnMore(openLearnMore === 'details' ? '' : e.target.name);
                }}
              >
                {openLearnMore === 'details' ? '- Learn more' : '+ Learn more'}
              </button>
              <LearnMoreInfoTwo openLearnMore={openLearnMore}>
                <p>
                  Spin up a Trello card with a click, then uncover everything
                  it can hold. Break down bigger card tasks into steps with
                  file attachment previews, reminders, checklists and
                  comments—emoji reactions included! Plus, gain powerful
                  perspective by seeing all cards by list and status at
                  the board level.
                </p>

                <p>Your team can: </p>

                <ul>
                  <li>
                    Manage deadlines
                  </li>
                  <li>
                    Provide and track feedback
                  </li>
                  <li>
                    Assign tasks and hand off work
                  </li>
                  <li>
                    Connect work across apps
                  </li>
                </ul>
              </LearnMoreInfoTwo>
            </div>
          </Feature>
          <Feature positionImg="left">
            <img src={AutomationFeature} alt="View Feature" />
            <div>
              <SubtitleFeature>Meet your new butler</SubtitleFeature>
              <TitleFeature>No-code automation</TitleFeature>
              <InfoFeature>
                Let the robots do the work—so your team can focus on
                work that matters. With Trello’s built-in automation,
                Butler, reduce the number of tedious tasks (and clicks)
                on your project board by harnessing the power of automation
                across your entire team.
              </InfoFeature>
              <button
                type="button"
                name="butler"
                onClick={(e) => {
                  setOpenLearnMore(openLearnMore === 'butler' ? '' : e.target.name);
                }}
              >
                {openLearnMore === 'butler' ? '- Learn more' : '+ Learn more'}
              </button>
              <LearnMoreInfoThree openLearnMore={openLearnMore}>
                <p>
                  Butler uses natural language commands to automate just about any task in Trello:
                </p>
                <ul>
                  <li>
                    Automate common actions like moving lists
                  </li>
                  <li>
                    Create custom buttons to build process quickly
                  </li>
                  <li>
                    Surface upcoming deadlines to the team
                  </li>
                  <li>
                    Schedule teammate assignments, and more!
                  </li>
                </ul>
                <button type="button">
                  Learn more about Butler Automation
                </button>
              </LearnMoreInfoThree>
            </div>
          </Feature>
          <Feature positionImg="right">
            <img src={PowerUpsFeature} alt="View Feature" />
            <div>
              <SubtitleFeature>Power-ups</SubtitleFeature>
              <TitleFeature>Integrate top work tools</TitleFeature>
              <InfoFeature>
                Easily connect the apps your team already uses into your
                Trello workflow, or add a Power-Up that helps fine-tune
                one specific need. With hundreds of Power-Ups available,
                your team’s workflow wishes are covered.
              </InfoFeature>
              <button
                type="button"
                name="power-ups"
                onClick={(e) => {
                  setOpenLearnMore(openLearnMore === 'power-ups' ? '' : e.target.name);
                }}
              >
                {openLearnMore === 'power-ups' ? '- Learn more' : '+ Learn more'}
              </button>
              <LearnMoreInfoFour openLearnMore={openLearnMore}>
                <p>
                  From Reporting to Custom Fields to your beloved
                  software integrations—we’ve got functionalities,
                  your favorites, and more!
                </p>
                <p>
                  Such as:
                </p>
                <ul>
                  <li>
                    Confluence
                  </li>
                  <li>
                    Slack
                  </li>
                  <li>
                    Dropbox
                  </li>
                  <li>
                    Google Drive
                  </li>
                  <li>
                    Evernote
                  </li>
                </ul>
                <button type="button">
                  Learn more about Power-Ups
                </button>
              </LearnMoreInfoFour>
            </div>
          </Feature>
        </DivFeatures>
      </Container>
    </section>
  );
}

export default FeaturesSection;
