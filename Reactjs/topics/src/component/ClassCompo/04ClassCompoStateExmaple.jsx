import React, { Component } from 'react';

class ClassCompoStateExmaple extends Component {
    constructor() {
        super();
        console.log("called constructor");
        this.state = {data:"somethign"}
        // this.btnClickHandle = this.btnClickHandle.bind(this)
    }
    
    // let data ="test"
    // datamemeber ="test"
    // btnClickHandle(){
    //     // this.datamemeber = "Testing"
    //     console.log("called");
    //     this.setState({
    //         data:"Something"
    //     })
    // }
    btnClickHandle = ()=>{
        this.datamemeber = "Testing"
        console.log("called");
        this.setState({
            data:"Something"
        })
    }
    render() {
        let variable ="variable"
        return (
            <div>
                {/* {datamemeber} */}
                <p>DataMember : {this.datamemeber}</p>
                <p>variable : {variable}</p>
                <p>ReactJs State : {this.state.data}</p>
                
                
                {/* <button onClick={btnClickHandle()}>Click</button>
                <button onClick={btnClickHandle}>Click</button> */}
                {/* <button onClick={this.btnClickHandle()}>Click</button> */}
                <button onClick={this.btnClickHandle}>Click</button>
            </div>
        );
    }
}

export default ClassCompoStateExmaple;