import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import  {init} from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' label='Name' placeholder='Insert the name'
                        cols='12 4' readOnly={readOnly} component={labelAndInput} />
                    <Field name='month' label='Month' placeholder='Insert the month' type='number'
                        cols='12 4' readOnly={readOnly} component={labelAndInput} />
                    <Field name='year' label='Year' placeholder='Insert the year' type='number'
                        cols='12 4' readOnly={readOnly} component={labelAndInput} />
                    <ItemList list={credits} cols='12 6' readOnly={readOnly} field='credits' legend='Credits' />
                    <ItemList cols='12 6' readOnly={readOnly} field='debts' legend='Debts' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }

}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
