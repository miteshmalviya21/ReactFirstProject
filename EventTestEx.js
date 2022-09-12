import React from "react"

export default function EventTestEx(){

    function Handler(event){
        console.log(event.target.name)
        if(event.target.name === "b1"){
            console.log("Button 1 is clicked")
        }
        if(event.target.name === "b2"){
            console.log("Button 2 is clicked")
        }
    }


    return(<div>
        <button name="b1" onClick={Handler}>OK1</button>
        <button name="b2" onClick={Handler}>OK2</button>
        </div>
    )
}