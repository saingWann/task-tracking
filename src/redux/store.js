import {configureStore} from '@reduxjs/toolkit'
import AllTaskReducer from './taskDataSlice'

const store = configureStore({
    reducer: {
        allTasks: AllTaskReducer
    },
})
