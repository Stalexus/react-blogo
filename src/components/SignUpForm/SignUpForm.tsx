import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { ROUTE } from '../../router/routes';
import PacmanLoader from "react-spinners/ClipLoader";
import { getFirebaseMessageError } from '../../utils/firebase-error'
import { ErrorMessage, SignUpButton, SignUpLink, SignUpText, SignUpEmailInput, SignUpLabel, SignUpPasswordInput, SignUpStyled } from "./styles";
import { Modal } from "../Modal";

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
    const [isOpen, toggleModal] = useState<boolean>(false)


    const handleModal = () => {
        toggleModal((isOpen) => !isOpen);
    }

    const onSubmit: SubmitHandler<SignUpFormValues> = ({ email, password }) => {
        setIsLoading(true);
        setErrorMessage(null);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleModal()
            })
            .catch((error) => {
                setErrorMessage(getFirebaseMessageError(error.code))
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
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <SignUpButton type='submit'>
                {isLoading ? <PacmanLoader /> : 'Sign Up'}
            </SignUpButton>
            <SignUpText>You already have an account?{' '}
                <SignUpLink to={ROUTE.SIGN_IN}>Sign In</SignUpLink>
            </SignUpText>
            <Modal isOpen={isOpen} handleModal={handleModal} />
        </SignUpStyled>
    )
};