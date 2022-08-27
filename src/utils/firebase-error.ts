type FirebaseMessageErrors =
    | 'auth/email-already-exists'

enum ErrorMesage {
    UNKNOWN_ERROR = 'Unknown error, reload page',
    EMAIL_ALLREADY_EXISTS = 'This email is already exists, please try again',
}

const getFirebaseMessageError = (code: FirebaseMessageErrors): ErrorMesage => {
    switch (code) {
        case 'auth/email-already-exists':
            return ErrorMesage.EMAIL_ALLREADY_EXISTS;

        default:
            return ErrorMesage.UNKNOWN_ERROR;
    }
};

export { getFirebaseMessageError };