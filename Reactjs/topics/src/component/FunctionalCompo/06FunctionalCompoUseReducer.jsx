import React, { useReducer } from 'react';

const initval = {count:0}
function funname(state,anthing) {
    switch (anthing.type) {
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        default:
            break;
    }
}
const FunctionalCompoUseReducer = () => {
    const [state,dispatch] = useReducer(funname,initval)
    return (
        <>
            <button onClick={()=> dispatch({type:'decrement'}) }>decrememnt</button>
            {state.count}
            <button onClick={()=> dispatch({type:'increment'}) }>increment</button>
        </>
    );
};

export default FunctionalCompoUseReducer;