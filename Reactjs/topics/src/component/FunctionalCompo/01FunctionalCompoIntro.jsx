import React from 'react';
import { useState } from 'react';

const FunctionalCompoIntro = () => {
    // const [anthing,something] = useState();
    const [state,setState] = useState("Test");
    const [counter,setCounter] = useState(0);
    // const UserName = "Testing"
    let UserName = "Testing"
    const increase = ()=> {
        // console.log(counter);
        setCounter(counter+1)
    }
    const changeData = ()=> {
        console.log("called");
        UserName = "Changed"
        // something("data")
        setState("data")
    }
    return (
        <div>
            FunctionalCompoIntro
            <p>This function is a valid React component because it accepts a single <q>props</q>  (which stands for properties) object argument with data and returns a React element. We call such components <q>function components</q> because they are literally JavaScript functions.</p>
            <p>Simple Const Data username: {UserName}</p>
            <button onClick={changeData}>Click</button>
            <p>State Data : {state}</p>
            <button onClick={increase}>increment</button>
            <p>Counter : {counter}</p>
        </div>
    );
};

export default FunctionalCompoIntro;