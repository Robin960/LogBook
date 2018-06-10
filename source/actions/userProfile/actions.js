/**
 * Edit user details
 */

export const EDIT_USER = 'EDIT_USER';
export const editUser = (username) => ({
    type: EDIT_USER,
    data: {
        userName: username
    }
});

/**
 * Delete user 
 */

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = () => ({
    type: DELETE_USER,
    data: {
        userName: username
    }
});

/**
 * Save modified user details
 */

export const SAVE_USER = 'SAVE_USER';
export const editUser = () => ({
    type: SAVE_USER,
    data: {
        userName: username
    }
});