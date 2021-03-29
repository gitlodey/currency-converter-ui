import React, { useState } from 'react';
import {ShoppingCart} from "../shoping-cart/ShoppingCart";

export function Checkout() {

    const [items] = useState([{price: 20}, {price: 40}, {price: 100}])

    return <div>
        <ShoppingCart items={items} className="shopping-cart"/>
    </div>
}