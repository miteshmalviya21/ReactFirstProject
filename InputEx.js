import React, { useState } from "react";

export default function InputEX(){

    //let data="Default";
    let [data,setData] = useState("Default") //hook work for func component
    function Handler1(event){
        //console.log("you entered", event.target.value)
        //data = event.target.value;
        setData(event.target.value) //when we call this func the page is Rerender
        console.log("data value : ",data)
    }

    return(
        <div>
            <input type="text" onBlur={Handler1} />
            <p>{data}</p>
        </div>
    )
}