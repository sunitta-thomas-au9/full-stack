import React from 'react';
import DisplayList from './Tasks/DisplayList';
const getUrl='http://localhost:9700/todo/';
class Home extends React.Component {
    constructor() {
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        fetch(getUrl,{method:'GET'})        
        .then(resp=>resp.json())
        .then(data=>this.setState({
            data:data
        }))

    }
    render(){
              
        return(
            <DisplayList TodoList={this.state.data}/>
            
        );
    }
}

export default Home;