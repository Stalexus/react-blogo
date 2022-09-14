import { SignUpForm } from "../../components/SignUpForm";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { HomeLink, StyledForm, StyledSignUp } from "./styles";

export const SignUp = () => {
  return (
    <StyledSignUp>
      <Title text='Sign Up' />
      <HomeLink to={ROUTE.HOME}>Back to home</HomeLink>
      <StyledForm>
        <SignUpForm />
      </StyledForm>
    </StyledSignUp>
  );
};