import {ShoppingCartItem} from "./ShoppingCartItem";
import {CurrencyConverter} from "../../converter/service";
import {getService, registerService, useService} from "../../hooks/useService";

export function ShoppingCart({items}) {

    const checkServiceRegistration = getService('currencyConverter') !== undefined;

    if (checkServiceRegistration === false) {
        registerService('currencyConverter', CurrencyConverter);
    }

    let currencyConverter = useService('currencyConverter');
    currencyConverter.updateRates();

    return <table className="shopping-cart">
        <thead>
            <tr>
                <th>base currency price</th>
                <th>another currencies</th>
            </tr>
        </thead>
        <tbody>
        {
            items.map((item, index) => <ShoppingCartItem key={index} price={item.price} currencyConverter={currencyConverter} className='shopping-cart-item'/>)
        }
        </tbody>
    </table>
}