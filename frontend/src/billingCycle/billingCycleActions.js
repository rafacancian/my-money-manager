import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values){
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Operation create with success')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList')
                ])
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