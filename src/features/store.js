import {configureStore} from '@reduxjs/toolkit'
import FormStateReudcer from './formSlice'
import ActiveTabReducer from './activeTabSlice'
import SideBarReducer from './showMenu'
import CurrentPageReducer from './currentPage'
import currentTasksReducer from './currentTasks'
import isChangeReducer from './isChange'
import taskToEdit from './taskToEdit'

export const store = configureStore({
    reducer: {
        formState: FormStateReudcer, 
        activeTab: ActiveTabReducer,
        sideBar: SideBarReducer,
        currentPage: CurrentPageReducer,
        currentTasks: currentTasksReducer,
        isChange: isChangeReducer,
        taskToEdit: taskToEdit,
    },
})
