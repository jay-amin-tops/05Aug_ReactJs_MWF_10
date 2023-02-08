import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListKeysArraymap extends Component {
    render() {
        // let arr = [12, 45, 5, 8, 4, 2]
        // let MenuData =[{"home":"Home"}]
        let MenuData ={"/home":"Home","/about":"About"}
        // let printData = arr.forEach(element => {
        //     // console.log(element);
        //     return <li>Test</li>
        // });
        // let printData =  arr.map(()=>{
        //     return <li>Test</li>
        // })
        let MenuItem =  Object.entries(MenuData).map(([key,data],index)=>{
        // let MenuItem =  Object.entries(MenuData).map((data,key,index)=>{
            // console.log(data); 
            // console.log(data[0]); 
            // console.log(data[1]); 
            // console.log("Kye is ", key," Value is ", data ); 
            // console.log(key); 
            // console.log(data); 
            return <li key={index}> <Link to={key}>{data}</Link> </li>
        })
        return (
            <div>
                {/* test */}
                {MenuItem}
                {/* {printData}
                {arr.forEach(element => {
                    console.log(element); 
                    <li>{element}</li>
                })} */}
            </div>
        );
    }
}

export default ListKeysArraymap;