import React from 'react';
class Constructor extends React.Component{
    constructor(){
        super()
        this.state={
            data:"sanjay"
        }
    }
    render(){
        return(
            <h1>Constructor {this.state.data}</h1>
        )
    }
}
export default Constructor