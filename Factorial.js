import React from "react";

function Factorial(){
    return(
    <div className="factStyle">
        <center>
        <h1 className="h1">Print Factorial</h1>
        <input type="text" id="num" placeholder="Enter number"/><br></br><br></br>
        <input type="submit" value="factorial" onClick={Calculate}/><br></br><br></br>
        <h1 id="printNum" ></h1>
        <input type="submit" value="table" onClick={Table}/><br></br><br></br>
        <p id="Table"></p>
        </center>
    </div>)
}

function Calculate(){
    var num = document.getElementById("num").value;
    var res = 1;
    for(var i=1;i<=num;i++)
    {
        res = res*i;
    }

    document.getElementById("printNum").innerHTML = "Factorial of number is  : " + res;
}

function Table(){
    var num = document.getElementById("num").value;
    var str="";
    for (var i=1;i<=10;i++){
        str=str +"<p>"+num+ " x " +i+ " = "+num*i+ "</p>"
    }
    document.getElementById("Table").innerHTML= str
}

export default Factorial;

