import {createSlice} from '@reduxjs/toolkit'

export const taskToEdit = createSlice({

    name:'taskToEdit',
    initialState: {},
    reducers:{
         setTaskToEdit :(state,actions) => {
        
             console.log(actions.payload)
            return state = actions.payload
    }
    }
})

export const {setTaskToEdit} = taskToEdit.actions;
export default taskToEdit.reducer