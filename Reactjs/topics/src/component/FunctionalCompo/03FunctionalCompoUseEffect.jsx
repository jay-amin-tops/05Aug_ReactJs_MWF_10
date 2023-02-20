import React, { useEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {
    const [counter,setCounter] = useState(0)
    const [otherdata,setOtherData] = useState("something")
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[])

    // if we pass second arg as empty array it will perform as constructor
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[])
    
    // if we add return in useEffect it will perform as did mound method in class compo 
    // useEffect(()=>{
    //     console.log("useEffect called");
    //     return ()=>{
    //         console.log("did mount called");
    //     }
    // },[])

    useEffect(()=>{
        console.log("useEffect called");
        // return ()=>{
        //     console.log("did mount called");
        // }
    },[counter])
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