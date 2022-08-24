type FireBaseMessageErrors =
    | 'auth/email-already-exists'

enum ErrorMesage {
    UNCNOWN_ERROR = 'Unknown error, reload page',
    EMAIL_ALLREADY_EXISTS = 'This email is already exists, please try again',
}

const getFireBaseMessageError = (code: FireBaseMessageErrors): ErrorMesage => {
    switch (code) {
        case 'auth/email-already-exists':
            return ErrorMesage.EMAIL_ALLREADY_EXISTS;

        default:
            return ErrorMesage.UNCNOWN_ERROR;
    }
};

export { getFireBaseMessageError };