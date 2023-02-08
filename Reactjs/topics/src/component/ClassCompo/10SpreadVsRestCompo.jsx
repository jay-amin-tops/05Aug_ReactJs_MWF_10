import React, { Component } from 'react';

class SpreadVsRestCompo extends Component {
    getData=(a,...data)=>{
        console.log("getData",data);
        // console.log(data[0]);
    }
    getDataSpread=(a,b,c)=>{
        console.log(a,b,c);
    }
    
    render() {
        const myName = ["Sofela", "is", "my"];
        // const aboutMe = ["Oluwatobi", ...myName, "name."];
        const aboutMe = ["Oluwatobi",myName, "name."];
        console.log("About me data",aboutMe);
        let arr = [12,45,50]; 
        return (
            <div>
                function myBio(firstName, lastName, ...otherInfo) &#123; <br />
                  &nbsp;&nbsp;&nbsp; return otherInfo;<br />
                &#125;<br />

                // Invoke myBio function while passing five arguments to its parameters: <br />
                myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
                {this.getData(10,50,50,80,90,80)}
                {/* {this.getDataSpread([10,50,90])} */}
                {this.getDataSpread(arr)}
                <br />
                const myName = ["Sofela", "is", "my"];
                <br />
                const aboutMe = ["Oluwatobi", ...myName, "name."];
                <br />
                <p>About me : {aboutMe}</p>
                
                const numbers = [1, 3, 5, 7];<br />

                function addNumbers(a, b, c, d)&#123;<br />
                &nbsp;&nbsp;&nbsp;return a + b + c + d;<br />
                &#125;<br />

                console.log(addNumbers(...numbers));
                <br />
                console.log(aboutMe);
                {/* {this.getDataSpread(arr)} */}
            </div>
        );
    }
}

export default SpreadVsRestCompo;