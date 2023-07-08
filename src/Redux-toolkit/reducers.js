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
            const timestamp = new Date().getTime(); // Current timestamp
            const date = new Date(timestamp);
            const dateFormat = date.getDate() +
                "/" + (date.getMonth() + 1) +
                "/" + date.getFullYear() +
                " " + date.getHours() +
                ":" + date.getMinutes() +
                ":" + date.getSeconds()

            const formattedMessage = {username, message, date: dateFormat, id: timestamp};
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
        deleteMessage: (state, action) => {
            const {message} = action.payload;
            state.messages = state.messages.filter(m => m.message !== message);
            localStorage.setItem("messages", JSON.stringify(state.messages))
        },
    },
});

export const {addUser, addMessage, removeUser, updateMessages, deleteMessage} = chatSlice.actions;

export default chatSlice.reducer;
