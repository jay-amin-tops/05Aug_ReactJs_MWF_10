import React, { Component } from 'react';

class CompositionChild extends Component {
    render() {
        return (
            <div>
                {this.props.title}  
                class compo child     
            </div>
        );
    }
}

export default CompositionChild;