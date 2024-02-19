import {createSlice ,createAsynThunk} from '@reduxjs/toolkit'

const allTasks = {
    tasks: [],
    status: 'idle',
    error: null,
  };

export const allTasksSlice = createSlice({

    name: 'allTasks',
    allTasks,
    reducers: {
      
    }
})


export default allTasksSlice.reducer