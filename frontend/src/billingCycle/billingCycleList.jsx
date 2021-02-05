import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    render() {
        console.log(this.props.list)
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th className='table-actions'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderTableRows(){
        const list = this.props.list || []
        return list.map(row => (
            <tr key={row._id}>
               <td>{row.name}</td>
               <td>{row.month}</td>
               <td>{row.year}</td>
               <td>
                   <button className='btn btn-warning'>
                        <i className='fa fa-pencil'></i></button>
                   <button className='btn btn-danger'>
                        <i className='fa fa-trash-o'></i></button>
               </td>
             </tr>
        ))
    }

}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
