import { SignUpForm } from '../../components/SignUpForm'
import { Title } from '../../components/Title'
import { ROUTE } from '../../router/routes'
import { HomeLink, StyledForm, StyledSignUp } from './styles'

export const SignUp = () => {
    return (
        <StyledSignUp>
            <HomeLink to={ROUTE.HOME}>Back to home</HomeLink>
            <Title text='SignUp' />
            <StyledForm>
            <SignUpForm />
            </StyledForm>
        </StyledSignUp>
    )
}