import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { ROUTE } from '../../router/routes';
import PacmanLoader from "react-spinners/ClipLoader";
import { getFireBaseMessageError } from '../../utils/firebase-error'
import { SignUpEmailInput, SignUpLabel, SignUpPasswordInput, SignUpStyled } from "./styles";

type SignUpFormValues = {
    email: string;
    password: string;
};

export const SignUpForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SignUpFormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    const onSubmit: SubmitHandler<SignUpFormValues> = ({ email, password }) => {
        setIsLoading(true);
        setErrorMessage(null);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        <SignUpStyled onSubmit={handleSubmit(onSubmit)}>
            <SignUpLabel>
                Email
                <SignUpEmailInput type="email" {...register('email', {
                    required: 'Email is required',
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })} />
            </SignUpLabel>
            {errors.email && <span>{errors.email.message}</span>}
            <SignUpLabel>
                Password
                <SignUpPasswordInput type="password" {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                    }
                })} />
            </SignUpLabel>
            {errors.password && <span>{errors.password.message}</span>}
            {errorMessage && <span>{errorMessage}</span>}
            <p>Forgot password?</p>
            <button type='submit'>
                {isLoading ? <PacmanLoader /> : 'Sign Up'}
            </button>
            <p>You already have an account {' '}
                <Link to={ROUTE.SIGN_IN} />
            </p>
        </SignUpStyled>
    )
};
