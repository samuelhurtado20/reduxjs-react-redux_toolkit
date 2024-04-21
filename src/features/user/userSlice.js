import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        username: "",
        email: ""
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload)
            const { name, username, email } = action.payload
            state.name = name
            state.username = username
            state.email = email
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    },
})

export const { addUser, changeEmail } = counterSlice.actions

export const addUserAsync = (user) => (dispatch) => {
    setTimeout(() => {
        dispatch(addUser(user))
    }, 1000)
}

export const currentUser = (state) => state.user

export default counterSlice.reducer
