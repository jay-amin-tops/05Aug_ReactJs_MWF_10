import React, { Component } from 'react';
import TemperatureInput from './2InputField.jsx';

class Mainfile extends Component {
    handleCelsiusChange = (data)=>{
        console.log("Mainfile handleCelsiusChange Parent",data);
    }
    render() {
        return (
            <div>
                parent Data
                <TemperatureInput parentMethod={this.handleCelsiusChange} /> 
            </div>
        );
    }
}

export default Mainfile;