import {Price} from "./Price";
import { useAsync } from "react-async"

export function ShoppingCartItem({price, currencyConverter}) {

    const { data = [], error, isPending } = useAsync(currencyConverter.convert, {price});

    const formattedPrices = currencyConverter.format(data);

    if (isPending) return <tr><td colSpan={3}>"Loading..."</td></tr>
    if (error) return <tr><td colSpan={3}>`Something went wrong: ${error.message}`</td></tr>
    if (data)
        return (
            <tr className="shopping-cart-item">
                <td>
                    ${price}
                </td>
                <td>
                    <p>prices in another available currencies is:</p>
                    {formattedPrices.map(price => <Price key={price.name} name={price.name} value={price.value}/>)}
                </td>
            </tr>
        )
    return null
}