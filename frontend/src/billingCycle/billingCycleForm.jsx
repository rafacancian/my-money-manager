import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class BillingCycleForm extends Component {

    render() {
            const { handleSubmit } = this.props
            return (
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name='name'  component='input'
                            label='Name' cols='12 4' placeholder='Insert the name' />
                        <Field name='month'  type='number'  component='input'
                            label='Month' cols='12 4' placeholder='Insert the month' />
                        <Field name='year' type='number'  component='input'
                            label='Year' cols='12 4' placeholder='Insert the year' />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className={`btn btn-submit`}>Submit</button>
                        <button type='button' className='btn btn-default'>Cancel</button>
                    </div>
                </form>
            )
    }

}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)
