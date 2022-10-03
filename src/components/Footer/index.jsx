import {
  Container,
  DivGrid,
  SocialIcon,
  FooterStyled,
  TrelloLogoFooter,
  LogInFooter,
  NavFooter,
  FooterList,
  ItemList,
  DivLanguage,
  FormStyled,
  SelectStyled,
  DivTermsService,
  ListTermsService,
  ItemListTermsService,
  DivSocial,
  ListSocial,
  ItemListSocial,
} from './styles';

const today = new Date();
const year = today.getFullYear();

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <DivGrid>
          <TrelloLogoFooter aria-labelledby="trello-logo-footer" height="64" role="img" viewBox="0 0 312 64" width="312" xmlns="http://www.w3.org/2000/svg" className="LogoTrello__Logo-sc-11mphmv-0 dmCGMv">
            <title id="trello-logo-title">Trello</title>
            <linearGradient id="trello-logo-gradient-white" x1="49.999978%" x2="49.999978%" y1="99.983977%" y2=".032046%">
              <stop offset="0" stopColor="#fff" stopOpacity=".5" />
              <stop offset=".15" stopColor="#fff" stopOpacity=".65" />
              <stop offset=".3" stopColor="#fff" stopOpacity=".78" />
              <stop offset=".46" stopColor="#fff" stopOpacity=".88" />
              <stop offset=".62" stopColor="#fff" stopOpacity=".95" />
              <stop offset=".8" stopColor="#fff" stopOpacity=".99" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <g fill="none" fillRule="evenodd">
              <path d="m55.75 0h-47.56c-4.09243 0-7.41 3.31757-7.41 7.41v47.59c0 4.09243 3.31757 7.41 7.41 7.41h47.56c4.09243 0 7.410027-3.31757 7.410027-7.41v-47.57c.0052867-1.96871715-.7730611-3.85862176-2.163282-5.25259496s-3.2780207-2.17740504-5.246745-2.17740504zm-28.1 45c0 1.3602476-1.0997635 2.4644929-2.46 2.47h-10.43c-1.3618668-.0054804-2.4645196-1.1081332-2.47-2.47v-31c.0054804-1.3618668 1.1081332-2.4645196 2.47-2.47h10.43c1.3602365.0055071 2.46 1.1097524 2.46 2.47zm24-14.21c-.0054804 1.3618668-1.1081332 2.4645196-2.47 2.47h-10.43c-1.3602365-.0055071-2.46-1.1097524-2.46-2.47v-16.79c0-1.3602476 1.0997635-2.4644929 2.46-2.47h10.43c1.3618668.0054804 2.4645196 1.1081332 2.47 2.47z" fill="url(#trello-logo-gradient-white)" />
              <g fill="#fff" fillRule="nonzero">
                <path d="m130.08 4.59v12.06h-14.3v45.75h-13.78v-45.75h-14.28v-12.06z" />
                <path d="m147.62 62.4h-12.74v-45h12.74v8.62c2.41-6.07 6.28-9.67 13.17-9.23v13.32c-8.95-.7-13.17 1.5-13.17 8.71z" />
                <path d="m230.4 62.76c-8.35 0-13.61-4.05-13.61-13.47v-49.29h12.83v47.53c0 2.73 1.81 3.7 4 3.7.631315.0130885 1.262786-.0169816 1.89-.09v11.09c-1.670462.4130783-3.39032.5914589-5.11.53z" />
                <path d="m257.17 62.76c-8.35 0-13.6-4.05-13.6-13.47v-49.29h12.83v47.53c0 2.73 1.81 3.7 4 3.7.634638.0128631 1.269419-.0172055 1.9-.09v11.09c-1.677002.4145441-3.403668.5929326-5.13.53z" />
                <path d="m268.47 39.88c0-13.9 8-23.41 21.78-23.41s21.61 9.53 21.61 23.41-7.92 23.58-21.61 23.58-21.78-9.77-21.78-23.58zm12.48 0c0 6.78 2.84 12.14 9.3 12.14s9.13-5.36 9.13-12.14-2.76-12-9.13-12-9.25 5.22-9.25 12z" />
                <path d="m178 44c3.570328.3922021 7.1583.602474 10.75.63 9.75 0 18-2.62 18-12.06 0-9.17-8.47-16.07-18.66-16.07-13.72 0-22.5 10-22.5 23.85 0 14.43 7.58 23 24.71 23 5.085091.0521078 10.135127-.8466563 14.89-2.65v-10.83c-4.39 1.4-9.35 2.8-14.43 2.8-6.86 0-11.58-2.24-12.76-8.67zm9.83-17.68c3.61 0 6.51 2.45 6.51 5.8 0 4.32-4.56 5.66-9.79 5.66-2.230114-.0102442-4.456334-.1874058-6.66-.53.163357-2.1005717.762772-4.1440305 1.76-6 1.624894-3.0101722 4.749674-4.9072236 8.17-4.96z" />
              </g>
            </g>
          </TrelloLogoFooter>
          <LogInFooter type="button">Log in</LogInFooter>
          <NavFooter>
            <FooterList>
              <ItemList>
                <button type="button">
                  <span>About Trello</span>
                  <p>What&apos;s behind the boards</p>
                </button>
              </ItemList>
              <ItemList>
                <button type="button">
                  <span>Jobs</span>
                  <p>Learn about open roles on the Trello team</p>
                </button>
              </ItemList>
              <ItemList>
                <button type="button">
                  <span>Apps</span>
                  <p>Download the Trello app for your Desktop or Mobile devices</p>
                </button>
              </ItemList>
              <ItemList>
                <button type="button">
                  <span>Contact us</span>
                  <p>Need anything? Get in touch and we can help</p>
                </button>
              </ItemList>
            </FooterList>
          </NavFooter>
          <DivLanguage>
            <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.33514634,13.0909091 C2.80456741,17.1674997 5.87382928,20.4918664 9.91593939,21.5020963 C8.18760918,19.0069673 7.13798566,16.119686 6.87807529,13.0909091 L2.33514634,13.0909091 Z M2.33514634,10.9090909 L6.8751035,10.9090909 C7.12988231,7.89470494 8.18079774,5.00118821 9.91557751,2.49799419 C5.87364609,3.50833206 2.8045534,6.83262197 2.33514634,10.9090909 Z M22.6648537,10.9090909 C22.1954326,6.83250032 19.1261707,3.50813364 15.0840606,2.49790374 C16.8123908,4.99303266 17.8620143,7.88031403 18.1219247,10.9090909 L22.6648537,10.9090909 Z M22.6648537,13.0909091 L18.1248965,13.0909091 C17.8701177,16.1052951 16.8192023,18.9988118 15.0844225,21.5020058 C19.1263539,20.4916679 22.1954466,17.167378 22.6648537,13.0909091 Z M9.15315078,10.9090909 L15.843646,10.9090909 C15.5581939,7.94925479 14.3973512,5.12935736 12.4999751,2.78265622 C10.595448,5.13778492 9.43302782,7.96652031 9.15315078,10.9090909 Z M15.8468492,13.0909091 L9.15635402,13.0909091 C9.44180608,16.0507452 10.6026488,18.8706426 12.5000249,21.2173438 C14.404552,18.8622151 15.5669722,16.0334797 15.8468492,13.0909091 Z M12.5,24 C5.59644063,24 0,18.627417 0,12 C0,5.372583 5.59644063,0 12.5,0 C19.4035594,0 25,5.372583 25,12 C25,18.627417 19.4035594,24 12.5,24 Z" fill="white" />
            </svg>
            <FormStyled action="#">
              <SelectStyled name="countries" id="countries">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="du">Dutch</option>
                <option value="fr">Français</option>
              </SelectStyled>
            </FormStyled>
          </DivLanguage>
          <DivTermsService>
            <ListTermsService>
              <ItemListTermsService>
                <button type="button">
                  Privacy Policy
                </button>
              </ItemListTermsService>
              <ItemListTermsService>
                <button type="button">
                  Terms
                </button>
              </ItemListTermsService>
              <ItemListTermsService>
                <button type="button">
                  Cookie Settings
                </button>
              </ItemListTermsService>
              <ItemListTermsService>
                Copyright &copy;
                {' '}
                {year}
                {' '}
                Atlassian
              </ItemListTermsService>
            </ListTermsService>
          </DivTermsService>
          <DivSocial>
            <ListSocial>
              <ItemListSocial>
                <button type="button">
                  <SocialIcon width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon">
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
                  </SocialIcon>
                </button>
              </ItemListSocial>
              <ItemListSocial>
                <button type="button">
                  <SocialIcon
                    width="15px"
                    height="15px"
                    viewBox="0 0 310 310"

                  >
                    <g id="XMLID_834_">
                      <path
                        id="XMLID_835_"
                        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                      />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </SocialIcon>
                </button>
              </ItemListSocial>
              <ItemListSocial>
                <button type="button">
                  <SocialIcon
                    width="15px"
                    height="15px"
                    viewBox="0 0 310 310"
                  >
                    <g id="XMLID_801_">
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                      />
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      />
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                      />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </SocialIcon>
                </button>
              </ItemListSocial>
              <ItemListSocial>
                <button type="button">
                  <SocialIcon
                    width="15px"
                    height="15px"
                    viewBox="0 0 310 310"
                  >
                    <g id="XMLID_826_">
                      <path
                        id="XMLID_827_"
                        d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                      />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </SocialIcon>
                </button>
              </ItemListSocial>
              <ItemListSocial>
                <button type="button">
                  <SocialIcon
                    width="15px"
                    height="15px"
                    viewBox="0 0 310 310"
                  >
                    <g id="XMLID_822_">
                      <path
                        id="XMLID_823_"
                        d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
		C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
		C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
		c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
		c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
		C204.394,157.263,202.325,160.684,199.021,162.41z"
                      />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </SocialIcon>
                </button>
              </ItemListSocial>
            </ListSocial>
          </DivSocial>
        </DivGrid>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
