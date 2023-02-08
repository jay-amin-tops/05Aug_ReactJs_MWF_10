import React, { Component } from 'react';

class CompoLifeCycle extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);  
        this.state={
            data:"Something"
        } 
    }
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    componentDidMount() {
        console.log("componentDidMount");
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }
    shouldComponentUpdate(nextProps, nextState) { 
        console.log("shouldComponentUpdate");
        console.log("nextProps",nextProps, "nextState",nextState);
        // return false;
        return true;
    }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log("prevProps",prevProps, "prevState",prevState);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    changeState=()=>{
        console.log("called");
        this.setState({
            data:"other"
        })
    }
    render() {
        console.log("render");
        return (
            <div>
                <h2>Life Cycle</h2>
                <p>State : {this.state.data}</p>
                <button onClick={this.changeState}>Click</button>
            </div>
        );
    }
}


export default CompoLifeCycle;