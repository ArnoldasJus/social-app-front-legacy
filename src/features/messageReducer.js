import {createSlice} from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: []
    },
    reducers: {
        setMessages: (state, {payload}) => {
            state.messages = payload
        },
        // addPost: (state, {payload}) => {
        //     state.posts.push(payload)
        // },
        // setUsers: (state, {payload}) => {
        //     state.users = payload
        // },
        // updatePost: (state, {payload}) => {
        //     const index = state.posts.findIndex(x => x._id === payload._id)
        //     state.posts[index] = payload
        // }
    }
})

export const {setMessages} = messageSlice.actions;

export default messageSlice.reducer;