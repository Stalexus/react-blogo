import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { ROUTE } from '../../router/routes';
import PacmanLoader from "react-spinners/ClipLoader";
import { getFireBaseMessageError } from '../../utils/firebase-error'
import { SignInButton, PasswordLink, SignInLink, SignInText, SignInEmailInput, SignInLabel, SignInPasswordInput, SignInStyled } from "./styles";
import { ErrorMessage } from "../SignUpForm/styles";

type SignInFormValues = {
    email: string;
    password: string;
};

export const SignInForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SignInFormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    const onSubmit: SubmitHandler<SignInFormValues> = ({ email, password }) => {
        setIsLoading(true);
        setErrorMessage(null);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                setErrorMessage(getFireBaseMessageError(error.code))
            }).finally(() => {
                setIsLoading(false);
                reset();
            })
    }
    return (
        <SignInStyled onSubmit={handleSubmit(onSubmit)}>
            <SignInLabel>
                Email
                <SignInEmailInput type="email" {...register('email', {
                    required: 'Email is required',
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })} />
            </SignInLabel>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <SignInLabel>
                Password
                <SignInPasswordInput type="password" {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                    }
                })} />
            </SignInLabel>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <PasswordLink to={ROUTE.RESTORE_PASSWORD}>Forgot password?</PasswordLink>
            <SignInButton type='submit'>
                {isLoading ? <PacmanLoader /> : 'Sign In'}
            </SignInButton>
            <SignInText>Don’t have an account?{' '}
                <SignInLink to={ROUTE.SIGN_UP}>Sign Up</SignInLink>
            </SignInText>
        </SignInStyled>
    )
};