import React from "react";
import ShoppingItem from "./ShoppingItem";
import "./item.css";

export default function ShoppingCart()
{
    let shopping_list = [
        {id:"I1",item_name:"dress",item_cost:3000,item_q:5},
        {id:"I2",item_name:"keybord",item_cost:300,item_q:3},
        {id:"I3",item_name:"mouse",item_cost:100,item_q:2},
        {id:"I4",item_name:"mobile",item_cost:13000,item_q:1},
        
    ]

    let all_items = shopping_list.map(
         (item)=> {
            return <ShoppingItem key={item.id} 
            item_name={item.item_name} 
            item_cost={item.item_cost} 
            item_q={item.item_q} ></ShoppingItem> } )

    return(
        <div>
            {all_items}
        </div>
    )
}