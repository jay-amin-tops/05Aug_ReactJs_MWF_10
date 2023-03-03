import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


const  ThemeContext = createContext();
const UseContextExample = () => {
    const [theme,setTheme]= useState("light");
    return (
        <>
          Use context  Parent Data
          <ThemeContext.Provider value={theme}>
            <FormCompo />
          </ThemeContext.Provider>
        </>
    );
};

function FormCompo(params) {
    return(
        <>
            Child Data
            <PanelForDisp>
                <button>Signup</button>
                <button>Signin</button>
            </PanelForDisp>
        </>
    )
}
function PanelForDisp(params) {
    const theme = useContext(ThemeContext)
    const customClass = "panel-"+theme;
    return(
        <>
            Grand Child Data
           <div className={customClass}>
            testing
           </div>
        </>
    )
}
export default UseContextExample;