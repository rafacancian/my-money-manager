import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' label='Name' placeholder='Insert the name'
                        cols='12 4' component={labelAndInput} />
                    <Field name='month' label='Month' placeholder='Insert the month' type='number'
                        cols='12 4' component={labelAndInput} />
                    <Field name='year' label='Year' placeholder='Insert the year' type='number'
                        cols='12 4' component={labelAndInput} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-submit`}>Submit</button>
                    <button type='button' className='btn btn-default'>Cancel</button>
                </div>
            </form>
        )
    }

}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
