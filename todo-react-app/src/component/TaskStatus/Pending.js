import React from 'react';
import DisplayPending from './DisplayPending';
const url = 'http://localhost:9700/todo/'
class Pending extends React.Component {
    constructor(){
        super();
        this.state={
            details:''
        }
    }
    componentDidMount(){
        fetch(`${url}?status=pending`)
        .then(resp=>resp.json())
        .then(data=>this.setState({details:data}))
    }
    
    render(){
        return(
            <DisplayPending pendingList = {this.state.details} />          
        )
    }
    
}

export default Pending;