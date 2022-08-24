import { Link } from 'react-router-dom'
import { SignUpForm } from '../../components/SignUpForm'
import { Title } from '../../components/Title/Title'
import { ROUTE } from '../../router/routes'
import { StyledForm, StyledSignUp } from './styles'

export const SignUp = () => {
    return (
        <StyledSignUp>
            <Link to={ROUTE.HOME}>Back to home</Link>
            <Title text='SignUp' />
            <StyledForm>
            <SignUpForm />
            </StyledForm>
        </StyledSignUp>
    )
}