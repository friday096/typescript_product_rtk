import {createSlice} from '@reduxjs/toolkit'
import data from '../../utils/data.json'

const initialState = {
    blog:data,
    selectedItem:null
}

const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        getAllBlog:(state,action)=>{
            // console.log('checkkkk', state.blog )
            // console.log(action.payload);
            // state.blog = action.payload;
        }, 
        getIdByBlog:(state,action)=>{
            const itemId = action.payload;
            console.log('itemID', itemId)
            state.selectedItem = state.blog.find((item) => item.id === itemId) || null;

        },
        addNewBlog:(state, action) =>{
            state.blog.push(action.payload);
            // state.blog=action.payload;

            // return [{...state, action.payload}];

        },
        updateBlog:(state,action)=>{
            const { id, data } = action.payload;
            console.log('id', id, 'data', data)
            const itemToUpdate = state.blog.find(item => item.id === id);
            if (itemToUpdate) {
                Object.assign(itemToUpdate, data);
              }

        },
        deleteBlog:(state,action)=>{

            const id = action.payload;
            state.blog = state.blog.filter(item => item.id !== id);
        }
    }
})

export default blogSlice.reducer
export const {getAllBlog, getIdByBlog, addNewBlog, updateBlog, deleteBlog} = blogSlice.actions