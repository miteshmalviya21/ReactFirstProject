import React from "react";

export default function ShowList()
{
    let arr = ["salt","sugar","milk","rice","coffee"]
    let list_items = arr.map((element,index)=>{return <li key={index}>{element}</li>}) //rendering multiple component

    return(
        <div>
            <ol>{list_items}</ol> 
        </div>
    )
}