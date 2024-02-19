import {configureStore} from '@reduxjs/toolkit'
import AllTaskReducer from './taskDataSlice'
import FormStateReudcer from './formSlice'
import ActiveTabReducer from './activeTabSlice'
import SideBarReducer from './showMenu'
import CurrentPageReducer from './currentPage'

export const store = configureStore({
    reducer: {
        allTasks: AllTaskReducer,
        formState: FormStateReudcer, 
        activeTab: ActiveTabReducer,
        sideBar: SideBarReducer,
        currentPage: CurrentPageReducer,
    },
})
