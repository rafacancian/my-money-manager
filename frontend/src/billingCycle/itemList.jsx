import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class ItemList extends Component {

    renderRows() {
        return (
            <tr>
                <td><Field name={`credits[0].name`} component={Input}
                    placeholder='Insert the name' readOnly={this.props.readOnly} /></td>
                <td><Field name={`credits[0].value`} component={Input}
                    placeholder='Insert the value' readOnly={this.props.readOnly} /></td>
                <td>
                    <button type='button' className='btn btn-success'>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className='btn btn-warning'>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' className='btn btn-danger'>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th className='table-actions'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default ItemList