import { Component } from "react";
import React from "react";

export default class HelloC extends Component
{
    render(){
        return(<h1>Hello...{this.props.pname}</h1>)
    }
}