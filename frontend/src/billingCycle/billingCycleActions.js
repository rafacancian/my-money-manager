import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Operation create with success')
                dispatch(init())
            })
            .catch(ex => {
                ex.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function showUpdate(billingCycles){
    return [
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycles)
    ]
}

export function showDelete(billingCycles){
    return [
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycles)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate', 'tabUpdate', 'tabDelete'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}