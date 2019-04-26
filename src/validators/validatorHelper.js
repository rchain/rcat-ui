const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;

const validateRegex = (regex, str) => {
    return regex.test(str);
};

const validateEmailRegex = (email) => {
    return validateRegex(REGEX_EMAIL, email);
};

export const validateEmail = validateEmailRegex;
