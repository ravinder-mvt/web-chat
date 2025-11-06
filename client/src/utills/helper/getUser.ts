import { decodeToken } from "@/config/decode/Decode";

export const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem('user')

    if (userData) {
        try {
            return decodeToken(userData)


        } catch (error) {
            console.error('here is the error', error)
            return null
        }
    }
    return null;
}