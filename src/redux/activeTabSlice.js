import {createSlice} from '@reduxjs/toolkit'

const activeTabSlice = createSlice({
    name: 'activeTab',
    initialState: "All",
    reducers: {
        setActiveTab : (state,actions) => {
            return state = actions.payload
        }
    }
})

export const {setActiveTab} = activeTabSlice.actions;
export default activeTabSlice.reducer