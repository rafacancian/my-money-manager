import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values){
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Operation create with success')
        })
        .catch(ex => {
            ex.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    return{
        type: 'BILLING_CYCLE_CREATE'
    }
}