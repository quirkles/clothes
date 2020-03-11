const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const minLength = (length) => (value) => value >= length;
export const isEmail = (value) => emailRegex.test(value);
export const fieldsMatch = (a, b) => String(a) === String(b);
