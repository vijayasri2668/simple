import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import Heading from './Heading'

ReactDOM.render(
    <React.Fragment>
        <h1 className='head'>STYLING USING FUNCTIONAL AND CLASS COMPONENTS</h1>
        <App />
        <Heading/>
    </React.Fragment>,
    document.getElementById('root'),
)