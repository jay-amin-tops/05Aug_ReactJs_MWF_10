import React, { Component } from 'react';

class ClassCompoJSXExmaple extends Component {
    render() {
        let a = 50;
        let b = 50;

        return (
            <>
                <h2>JSX</h2>
                <p> value of a is {a} </p>
                <p> value of a is {a} </p>
                <p> Addition of a and b is {b+a} </p>
                <input type="text" value={a+b} name="" id="" />


            </>
        );
    }
}

export default ClassCompoJSXExmaple;