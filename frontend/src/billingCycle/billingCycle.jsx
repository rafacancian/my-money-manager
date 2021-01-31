import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {

    render() {
        return (
            <div> 
                <ContentHeader title='Payments cycle manager' small='Create payment' />
                <Content> 
                    billing cycle
                </Content> 
            </div> 
        )
    }
}

export default BillingCycle