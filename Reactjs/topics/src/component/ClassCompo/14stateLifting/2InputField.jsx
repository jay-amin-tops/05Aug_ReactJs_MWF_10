import React, { Component } from 'react';

class InputField extends Component {
    handleChange = (e) =>{
        console.log("InputField handleChange Child",e.target.value);
        this.props.parentMethod(e.target.value);
        // this.props.parentMethod("anything");
    }
    render() {
        return (
            <>
              <input onChange={this.handleChange}/>  
            </>
        );
    }
}

export default InputField;