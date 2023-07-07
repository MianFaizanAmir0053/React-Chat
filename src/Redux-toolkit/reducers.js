import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        users: [],
        currentUser: {},
        messages: [],
    },
    reducers: {
        addUser: (state, action) => {
            const {username} = action.payload;
            const timestamp = new Date().getTime(); // Current timestamp
            const user = {username: `${username}`, id: timestamp};
            state.users.push(user);
            state.currentUser = user
        },
        addMessage: (state, action) => {
            const {username, message} = action.payload;
            const formattedMessage = {username, message};
            state.messages.push(formattedMessage);
            localStorage.setItem("messages", JSON.stringify(state.messages))
        },
        updateMessages: (state, action) => {
            state.messages = [...action.payload]
        },
        removeUser: (state, action) => {
            const {username} = action.payload;
            state.users = state.users.filter(user => user.username !== username);
        },
    },
});

export const {addUser, addMessage, removeUser, updateMessages} = chatSlice.actions;

export default chatSlice.reducer;
