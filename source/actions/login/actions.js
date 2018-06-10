/**
 * Login into the application with user details
 */

export const LOG_IN = 'LOG_IN';
export const logIn = (username, password) => ({
    type: LOG_IN,
    data: {
        userName: username,
        password: password
    }
});