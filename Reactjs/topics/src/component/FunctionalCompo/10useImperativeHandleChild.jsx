import React, { forwardRef, useImperativeHandle } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ChildComponent = forwardRef((props, ref) => {
    const [ele, setEle] = useState({});
    const [ele2, setEle2] = useState({});
    const [NewArray, setNewArray] = useState({});

    useImperativeHandle(ref, () => ({
        getAlert() {
            let suffRes = shuffle(arr);
            var index = suffRes.indexOf(1);
            setEle(suffRes[0]);
            suffRes.shift(); // for first element
            // console.log(suffRes);
            props.onAddHandler(suffRes);
        },
    }));


    const arr = [1, 2, 3, 4, 5, 6];
    useEffect(() => {
        let suffRes = shuffle(arr);
        console.log(suffRes);
        var index = suffRes.indexOf(1);

        setEle(suffRes[0]);
        setEle2(suffRes[1]);
        suffRes.shift(); // for first element
        suffRes.shift(); // for second element
        // console.log(suffRes);
        props.onAddHandler(suffRes);
    }, [NewArray, ele]);
    const shuffle = (array) => {
        console.log("called inside shuffle");
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const childMethod = () => {
        console.log("call me");
    };

    return (
        <>
            Remaining Array Element = {JSON.stringify(ele)},{JSON.stringify(ele2)}
            <br />
            <br />
            All the Values of Array = {(arr)}
        </>
    );
});

export default ChildComponent;
