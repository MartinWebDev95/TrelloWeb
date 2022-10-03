import {
  Submenu,
  FirstListSubmenuItem,
  SecondListSubmenuItem,
  Features,
  FeaturesTitle,
  FeaturesInfo,
  FeaturesButton,
  ListItem,
  ListItemTitle,
  Wrapper,
} from './styles';

function SubmenuPlans({ openSubmenu, openMenu }) {
  return (
    <Submenu openSubmenu={openSubmenu} openMenu={openMenu}>
      <FirstListSubmenuItem>
        <Features>
          <ListItem>
            <FeaturesButton>
              <ListItemTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 46 65" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M39.4898 38.0009C47.9832 29.5074 47.9832 15.7367 39.4898 7.24318C30.5822 -1.66439 16.1402 -1.66439 7.23258 7.24318C6.98864 7.48712 6.75055 7.73682 6.51849 7.99208C-1.5614 16.88 -0.906394 30.6351 7.98148 38.7149L11.9763 42.3466V49.731H34.7461V42.3466L38.7409 38.7149C38.9961 38.4829 39.2458 38.2448 39.4898 38.0009ZM25.4829 10.0102C25.4829 8.58721 24.3294 7.43362 22.9063 7.43362C14.5263 7.43362 7.73301 14.227 7.73301 22.607V23.1795L7.73581 23.3008C7.79915 24.6675 8.92725 25.7561 10.3096 25.7561C11.7326 25.7561 12.8862 24.6026 12.8862 23.1795V22.607L12.8879 22.4187C12.9883 16.9716 17.4353 12.5868 22.9063 12.5868C24.3294 12.5868 25.4829 11.4332 25.4829 10.0102Z" fill="#79e2f2" />
                  <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M11.9756 54.8838V56.8794C11.9756 61.1224 15.4152 64.5621 19.6582 64.5621H27.0627C31.3057 64.5621 34.7454 61.1224 34.7454 56.8794V54.8838L34.7453 54.8838H11.9756Z" fill="#79e2f2" />
                </svg>
                <FeaturesTitle>Standard</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                View your team’s projects from every angle.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton>
              <ListItemTitle>
                <svg width="20" height="20" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.9976 4.47265L20.5966 17.4649L6.284 19.5483C4.88278 19.7523 3.58776 20.4133 2.59942 21.429L2.45904 21.5778C0.120359 24.1361 0.2185 28.1108 2.71579 30.5494L13.0726 40.6623L10.6277 54.9423C10.3883 56.3403 10.6157 57.7783 11.2746 59.0338L11.367 59.2038C13.0705 62.2298 16.8792 63.3687 19.9694 61.7413L32.7711 54.9993L45.5728 61.7413C46.826 62.4013 48.2616 62.6291 49.6572 62.3893L49.8438 62.3545C53.2449 61.668 55.5048 58.3903 54.9145 54.9423L52.4688 40.6623L62.8263 30.5494C63.8403 29.5593 64.5001 28.262 64.7037 26.8583L64.7279 26.673C65.1292 23.2193 62.7152 20.0515 59.2581 19.5483L44.9448 17.4649L38.5446 4.47265C37.9179 3.2007 36.8902 2.17117 35.6204 1.54343C32.4318 -0.0330011 28.5713 1.27846 26.9976 4.47265Z" fill="#f99cdb" />

                </svg>
                <FeaturesTitle>Premium</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                Automate tasks and workflows with Butler automation.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <FeaturesButton>
              <ListItemTitle>
                <svg width="20" height="20" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M38.9929 15.1289C40.2694 15.4199 41.2217 16.557 41.2217 17.9155C41.2217 19.4943 39.9355 20.7742 38.3489 20.7742C36.7623 20.7742 35.4762 19.4943 35.4762 17.9155C35.4762 16.557 36.4284 15.4199 37.7049 15.1289H27.0953C28.571 15.2488 29.731 16.4786 29.731 17.978C29.731 19.5568 28.4449 20.8367 26.8583 20.8367C25.2717 20.8367 23.9855 19.5568 23.9855 17.978C23.9855 16.4786 25.1456 15.2488 26.6213 15.1289H10.2425C7.704 15.1289 5.34277 17.1767 5.34277 19.7028V39.4512H60.1911V19.7028C60.1911 17.1767 58.1332 15.1289 55.5947 15.1289H38.9929Z" fill="#4c9aff" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.7074 37.1377V4.76532C16.7074 2.23922 18.7653 0.191406 21.3038 0.191406H43.9028C46.4413 0.191406 48.4992 2.23922 48.4992 4.76532V37.1377H62.6716C63.7386 37.1377 64.6035 38.0027 64.6035 39.0696C64.6035 40.1366 63.7386 41.0015 62.6716 41.0015H2.53539C1.46845 41.0015 0.603516 40.1366 0.603516 39.0696C0.603516 38.0027 1.46845 37.1377 2.53539 37.1377H16.7074ZM28.9645 37.1377V31.1644C28.9645 29.215 30.5526 27.6348 32.5115 27.6348C34.4705 27.6348 36.0585 29.215 36.0585 31.1644V37.1377H28.9645ZM29.7306 17.9787C29.7306 16.3999 28.4444 15.12 26.8579 15.12C25.2713 15.12 23.9851 16.3999 23.9851 17.9787C23.9851 19.5575 25.2713 20.8374 26.8579 20.8374C28.4444 20.8374 29.7306 19.5575 29.7306 17.9787ZM38.3488 15.0575C39.9354 15.0575 41.2216 16.3374 41.2216 17.9162C41.2216 19.495 39.9354 20.7749 38.3488 20.7749C36.7622 20.7749 35.4761 19.495 35.4761 17.9162C35.4761 16.3374 36.7622 15.0575 38.3488 15.0575ZM29.7306 8.76872C29.7306 7.18991 28.4444 5.91002 26.8579 5.91002C25.2713 5.91002 23.9851 7.18991 23.9851 8.76872C23.9851 10.3475 25.2713 11.6274 26.8579 11.6274C28.4444 11.6274 29.7306 10.3475 29.7306 8.76872ZM38.3488 5.91002C39.9354 5.91002 41.2216 7.18991 41.2216 8.76872C41.2216 10.3475 39.9354 11.6274 38.3488 11.6274C36.7622 11.6274 35.4761 10.3475 35.4761 8.76872C35.4761 7.18991 36.7622 5.91002 38.3488 5.91002Z" fill="#4c9aff" />
                </svg>
                <FeaturesTitle>Enterprise</FeaturesTitle>
              </ListItemTitle>
              <FeaturesInfo>
                Power up your teams by linking their favorite tools with Trello plugins.
              </FeaturesInfo>
            </FeaturesButton>
          </ListItem>
          <ListItem>
            <Wrapper>
              <div>
                <ListItemTitle>
                  <svg width="20" height="20" viewBox="0 0 44 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.8662 1.12885C28.0159 -0.433068 30.49 0.573172 30.2232 2.49419L25.0065 40.0545H1.90981C0.37708 40.0545 -0.504269 38.3114 0.40436 37.077L26.8662 1.12885Z" fill="#ffc400" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.4564 24.668C42.9892 24.668 43.8705 26.4111 42.9619 27.6455L16.5 63.5937C15.3503 65.1556 12.8762 64.1493 13.143 62.2283L18.3597 24.668L41.4564 24.668Z" fill="#ffc400" />
                  </svg>
                  <FeaturesTitle>Free plan</FeaturesTitle>
                </ListItemTitle>
                <FeaturesInfo>
                  For individuals or small teams looking to keep work organized.
                </FeaturesInfo>
              </div>
              <button type="button">Take a tour of Trello</button>
            </Wrapper>
          </ListItem>
        </Features>
      </FirstListSubmenuItem>
      <SecondListSubmenuItem>
        <h2>Compare plans & pricing</h2>
        <p>
          Whether you’re a team of 2 or 2,000, Trello’s flexible
          pricing model means you only pay for what you need.
        </p>
        <button type="button">View Trello pricing</button>
      </SecondListSubmenuItem>
    </Submenu>
  );
}

export default SubmenuPlans;
