import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        selectedUser: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        updateUser: (state, action) => {
            state.user = action.payload
        },
        setSelected: (state, action) => {
            state.selectedUser = action.payload
        }
    }

})


export const {setUser, updateUser, setSelected} = userSlice.actions;

export default userSlice.reducer;