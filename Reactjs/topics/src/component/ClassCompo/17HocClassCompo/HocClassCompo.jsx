import React, { Component } from 'react';
import EnhancedComponent from './EnhancedComponent.jsx' 

class HocClassCompo extends Component {
    render() {
        console.log("HocClassCompo called");
        const { show, handleclick } = this.props
        return (
            <div>
                HOC Component
                {/* <EnhancedComponent show="a" handleclick="handleclick"/> */}
                {/* <button onClick={handleclick}>{show}sdf</button>  */}
                <button onClick={handleclick}>{show}</button>
            </div>
        );
    }
}

// export default HocClassCompo;
export default EnhancedComponent(HocClassCompo);