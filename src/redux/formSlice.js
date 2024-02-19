import {createSlice} from '@reduxjs/toolkit'

const formStateSlice = createSlice({
    name: 'formState',
    initialState: {isShown : false,isEdit: false},
    reducers: {
        toggleFormState: (state) => {
            state.isShown = !state.isShown
            console.log(state.isShown)
        },
        toggleEditState: (state) => {
            state.isEdit = !state.isEdit
            state.isShown = !state.isShown
            console.log(state.isEdit)
        }
    }
})

export const {toggleFormState,toggleEditState} = formStateSlice.actions;
export default formStateSlice.reducer