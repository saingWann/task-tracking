import {createSlice} from '@reduxjs/toolkit'

const isChangeSlice = createSlice({
    name: 'isChange',
    initialState: false,
    reducers: {
        setIsChange: (state) => {
            return state = !state
        }
    }
})

export const {setIsChange} = isChangeSlice.actions
export default isChangeSlice.reducer 