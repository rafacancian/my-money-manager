import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    dashboard: () => ({summary: {credit:500, debt:200}})
})

export default rootReducer