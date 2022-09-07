type FirebaseMessageErrors =
    | 'auth/email-already-exists'
    | 'auth/email-already-in-use'
    | 'auth/user-not-found'
    | 'auth/invalid-email'
    | 'auth/invalid-password'

enum ErrorMessage {
    UNKNOWN_ERROR = 'Unknown error, reload page',
    EMAIL_ALREADY_EXISTS = 'This email already exists',
    EMAIL_ALREADY_IN_USE = 'This email is already in use, please try again',
    USER_NOT_FOUND = "User not found",
    INVALID_EMAIL = "Invalid email",
    INVALID_PASSWORD = "Invalid password",
}

const getFirebaseMessageError = (code: FirebaseMessageErrors | string): ErrorMessage => {
    switch (code) {
        case "auth/email-already-exists":
            return ErrorMessage.EMAIL_ALREADY_EXISTS;
        case "auth/email-already-in-use":
            return ErrorMessage.EMAIL_ALREADY_IN_USE;
        case "auth/user-not-found":
            return ErrorMessage.USER_NOT_FOUND;
        case "auth/invalid-email":
            return ErrorMessage.INVALID_EMAIL;
        case "auth/invalid-password":
            return ErrorMessage.INVALID_PASSWORD;

        default:
            return ErrorMessage.UNKNOWN_ERROR;
    }
};

export { getFirebaseMessageError };