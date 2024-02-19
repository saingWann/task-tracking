import {createSlice} from '@reduxjs/toolkit'

const showMenuSlice = createSlice({
    name: 'sideBarState',
    initialState : false,
    reducers: {
        toggleSideBar: (state) => {
            console.log(state)
          return  state = !state
        }
    }
})

export const {toggleSideBar} = showMenuSlice.actions;
export default showMenuSlice.reducer