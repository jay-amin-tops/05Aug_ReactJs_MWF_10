import React, { Component } from 'react';

class UnControlledComponent extends Component {
    constructor(props) {
        console.log("called"); 
        super(props);
        // this.inpRef =React.createRef();
        this.inpRef =React.createRef();
        this.inpPassRef =React.createRef();
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.inpRef);
        console.log(this.inpRef.current);
        console.log(this.inpRef.current.value);
    } 
    render() {
        return (
            <div>
                <form method="post" onSubmit={this.handleSubmit}>   
                    <input type="text" ref={this.inpRef} name="uname" id="uname" /> { JSON.stringify(this.inpRef)}
                    <input type="text" ref={this.inpPassRef} name="uname" id="uname" /> { JSON.stringify(this.inpRef)}
                </form>
            </div>
        );
    }
}

export default UnControlledComponent;