import { SignInForm } from "../../components/SignInForm"
import { Title } from "../../components/Title"
import { ROUTE } from "../../router/routes"
import { HomeLink, StyledForm } from "../SignUp/styles"
import { StyledSignIn } from "./styles"

export const SignIn = () => {
  return (
    <StyledSignIn>
      <HomeLink to={ROUTE.HOME}>Back to home</HomeLink>
      <Title text='SignIn' />
      <StyledForm>
        <SignInForm />
      </StyledForm>
    </StyledSignIn>
  )
}
