import React from 'react';
class Render extends React.Component{
    render()
    {
        console.log("render method",this.props);
        return(
            <h1>Render Component {this.props.name}</h1>
        )
    }
}
export default Render;