import { Component } from "react";

export default class ShowArray extends Component
{
    render()
    {
        return(<div>This is an array element...{this.props.name[0]}

        <p>This is my roll number {this.props.id.key} and my name is {this.props.id.value}</p>
        <p>This is square of number {this.props.math(5)}</p>

        </div>) // In Welcome.js 
    }
}