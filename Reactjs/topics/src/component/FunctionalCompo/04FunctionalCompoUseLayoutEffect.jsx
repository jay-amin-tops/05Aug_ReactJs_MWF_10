import React, { useEffect, useLayoutEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {
    const [counter,setCounter] = useState(0)
    const [otherdata,setOtherData] = useState("something")
    useEffect(()=>{
        console.log("useEffect called as construct");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect called as const");
    },[])
    // useLayoutEffect(()=>{
    //     console.log("useLayoutEffect called");
    // },[counter])
    const increment = ()=>{
        console.log("btn clicked");
        setCounter(counter+1)
    } 
    return (
        <>
            Functional Compo UseEffect
            <button onClick={increment}>Click {counter}</button>
            <button onClick={()=>{ console.log("called"); setOtherData("testing")}}>Test Other Data {otherdata}</button>
        </>
    );
};

export default FunctionalCompoUseEffect;