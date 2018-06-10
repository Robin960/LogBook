/**
 * Signup into the application with user details
 */

export const SIGN_UP = 'SIGN_UP';
export const signUp = (firstName, lastName, email, password, confirmPassword) => ({
    type: SIGN_UP,
    data: {
        firstName: firstName,
        lastName: lastName,
        userName: email,
        password: password,
        confirmPassword: confirmPassword
    }
});