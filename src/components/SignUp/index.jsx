import {
  SectionStyled, Container, DivStyled, FormStyled, Wrapper,
} from './styles';

function SignUp() {
  return (
    <SectionStyled>
      <Container>
        <Wrapper>
          <DivStyled>
            <p>Sign up and get started with Trello today. A world of productive teamwork awaits!</p>
            <FormStyled action="#">
              <input type="email" name="email" id="email" placeholder="Email" />
              <button type="submit">Sign Up</button>
            </FormStyled>
          </DivStyled>
        </Wrapper>
      </Container>
    </SectionStyled>
  );
}

export default SignUp;
