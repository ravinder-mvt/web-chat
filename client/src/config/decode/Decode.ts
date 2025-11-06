import {jwtDecode} from "jwt-decode";


interface tokenPayload {
    id: string,
    userName?: string,
    email: string,
    role?: string,
    iat: number,
    exp: number
}

export const decodeToken = (token: string ): tokenPayload => jwtDecode(token)