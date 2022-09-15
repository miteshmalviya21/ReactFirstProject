import React from "react";
import "./item.css";


export default function ShoppingItem(props)
{

    return(
        <div className="item" >
            <p>
            Name : {props.item_name}
            </p>
            <p>
            cost : {props.item_cost}
            </p>
            <p>
            quantity :{props.item_q}
            </p>
        </div>
    )
}