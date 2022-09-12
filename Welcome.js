import React from "react";
import ShowArray from "./ShowArray";

export default function Welcome(){
    let x =3000;
    let arr = ["Yuvraj ","dhoni ","virat ","rohit ","SKY "]

    let data ={}
    data.key = 21;
    data.value = "Mitesh";

    let square = (x) => {return x*x}


    return(<div>
    <h1>Welcome</h1>
    <p>Love you {x}</p>
    <ShowArray name={arr} id={data} math={square}></ShowArray>
    </div>);
}

export  function Greeting(props)
{
    return(<p>Namaste...{props.personname} {props.personsur}</p>)
}
