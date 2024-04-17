import { auth } from "./../Firebase/config";

let error = null;

const logout = async () => {
    error = null;

    try {
        await auth.signOut();
    } catch (err) {
        error = err.message;
    }
};

const logOut = () => {
    return { error, logout };
};

export default logOut;
