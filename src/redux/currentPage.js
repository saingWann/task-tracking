import {createSlice} from '@reduxjs/toolkit'

const currentPageSlice = createSlice({
    name:'curretPage',
    initialState: 1,
    reducers: {
        setCurrentPage: (state,actions) => {
            return state = actions.payload
        }
    }
})

export const {setCurrentPage } = currentPageSlice.actions
export default currentPageSlice.reducer