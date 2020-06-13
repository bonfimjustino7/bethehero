export const isAuthenticate = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    else {
        return false;
    }
};