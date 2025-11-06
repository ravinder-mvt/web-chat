import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../../../types/User.type"

const initialState = {
    user: null
}

const authSlice = createSlice({
    name: "google",
    initialState,
    reducers: {
        /**
         * Set the user state to the payload of the action.
         * @param {Object} state - The current state.
         * @param {Object} action - The action containing the user payload.
         */
        IsLogin: (state: { user: User | null }, action: PayloadAction<User>) => {
            state.user = action.payload,
                localStorage.setItem("user", JSON.stringify(state.user))
        },
        IsLogOut(state) {
            state.user = null
            localStorage.setItem("user", JSON.stringify(state.user))
        }
    }
})

export const { IsLogin, IsLogOut } = authSlice.actions
export default authSlice.reducer;
