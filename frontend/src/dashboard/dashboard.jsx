import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {

    render() {

        return (
            <div> 
                <ContentHeader title='Dashboard' small='version 1.0' />
                <Content>
                   <Row>
                       <ValueBox cols='12 4' color='light-blue' icon='bank'
                          text='Total Credit'  value={`R$ 500,00`} />
                       <ValueBox cols='12 4' color='red' icon='credit-card'
                          text='Total Debit' value={`R$ 200,00`} />
                       <ValueBox cols='12 4' color='green' icon='money'
                          text='Total Available' value={`R$ 300,00`} />
                   </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard
