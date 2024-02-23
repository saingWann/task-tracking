import {createSlice} from '@reduxjs/toolkit'

const activeTabSlice = createSlice({
    name: 'activeTab',
    initialState: "All",
    reducers: {
        setActiveTab : (state,action) => {
            return state = action.payload
        }
    }
})

export const {setActiveTab} = activeTabSlice.actions;
export default activeTabSlice.reducer