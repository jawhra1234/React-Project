import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.unshift(action.payload);
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.$id !== action.payload);
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.$id === action.payload.$id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        }
    }
});

export const { setPosts, addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
