import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../Api';


export const fetchAllUser = createAsyncThunk('allUsers/fetchAllUser', async () => {
    const response = await api.get(`/user`);
    // console.log(response.data)
    return response.data;
  });

  export const addUser = createAsyncThunk('allUsers/addUser', async (newItem) => {
    const response = await api.post(`/user`, newItem);
    console.log(newItem)
    return response.data;
  });
  
  
  export const deleteData = createAsyncThunk('allUsers/deleteData', async (id) => {
    console.log(id)
       const response = await api.delete(`/allTasks/${id}`);
       return response.data
  });

  
const allUsersSlice = createSlice ({
    name: 'allUsers',
    initialState: {allUsers:[],currentUser:{},loading:false,error:null},
    reducers: {
       setCurrentUser: (state,aciton) => {
        state.currentUser = {...aciton.payload}
        // console.log(typeof state.currentUser)
       }
        },
       
          extraReducers: (builder) => {
            builder
              .addCase(fetchAllUser.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.loading = false;
                state.allUsers = action.payload
              })
              .addCase(fetchAllUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              })
              .addCase(addUser.fulfilled, (state, action) => {
                state.allUsers.push(action.payload);
              })
              
          },
            
    })
    
    export const {setCurrentUser} = allUsersSlice.actions
export default allUsersSlice.reducer