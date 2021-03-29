import {convertPrice, filterCurrencyRates, getCurrencyRates} from "./index";
import {GET_CURRENCIES_RATES} from "./helpers/api";
import {AVAILABLE_CURRENCIES} from "./helpers/available-currencies";

export function CurrencyConverter() {
    let rates = null;

    async function updateRates() {
        const allRates = await getCurrencyRates(GET_CURRENCIES_RATES);
        const filteredRates = filterCurrencyRates(allRates, AVAILABLE_CURRENCIES);
        rates = filteredRates;

        return filteredRates;
    }

    async function convert({price}) {
        if (!rates) {
            await updateRates();
        }

        const priceObj = convertPrice(price,rates);
        const arrayOfPrices = [];

        Object.keys(priceObj).map(key => {
            if (priceObj.hasOwnProperty(key)) {
                arrayOfPrices.push({
                    name: key,
                    value: priceObj[key],
                })
            }
        });

        return arrayOfPrices;
    }

    return {
        updateRates,
        convert,
    }
}