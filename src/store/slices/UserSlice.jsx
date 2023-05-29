import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState : [],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
         },
        removeUser(state, action){
            state.splice(state.action, 1)
         },
        clearUsers(state, action){ 
            return []
        }
    }
})

export {userSlice};

export const {addUser, removeUser, clearUsers} = userSlice.actions;
