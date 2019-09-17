const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
const REGEX_PHONE = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;


const validateRegex = (regex, str) => {
    return regex.test(str);
};

const validateEmailRegex = (email) => {
    return validateRegex(REGEX_EMAIL, email);
};

const validatePhoneNumber = (mobile) => {
    return validateRegex(REGEX_PHONE, mobile)
};

export const validateEmail = validateEmailRegex;
export const validatePhone = validatePhoneNumber;
