import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        posts: [],
        users: [],
        messages: []
    },
    reducers: {
        setUsers: (state, {payload}) => {
            state.users = payload
        },
        setMessages: (state, {payload}) => {
            state.messages = payload
        },
        setSelected: (state, {payload}) => {
            state.users = payload
        },
        setPosts: (state, {payload}) => {
            state.posts = payload
        },
        addPost: (state, {payload}) => {
            state.posts.push(payload)
        },
        updatePost: (state, {payload}) => {
            const index = state.posts.findIndex(x => x._id === payload._id)
            state.posts[index] = payload
        }
    }
})

export const {setPosts, addPost, setUsers, updatePost, setSelected, setMessages} = dataSlice.actions;

export default dataSlice.reducer;