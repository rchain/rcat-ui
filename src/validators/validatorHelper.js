const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
const REGEX_PHONE = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

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
