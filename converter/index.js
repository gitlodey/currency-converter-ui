import fetch from "node-fetch";

export async function getCurrencies(api) {
    return fetch(api)
        .then(res => res.json())
        .catch(() => {
            return {};
        });
}

export async function getCurrencyRates(api) {
    return fetch(api)
        .then(res => res.json())
        .then(data => {
            return data.rates || {};
        })
        .catch(() => {
            return {};
        });
}

export function filterCurrencyRates(all, available = []) {
    let filtered = {};

    for (let currency in all) {
        if (all.hasOwnProperty(currency) && available.includes(currency)) {
            filtered[currency] = all[currency];
        }
    }

    return filtered;
}

export function convertPrice(price, rates) {
    const currencyRates = {};

    for (let rate in rates) {
        if (rates.hasOwnProperty(rate)) {
            currencyRates[rate] = price * Number(rates[rate]);
        }
    }

    return currencyRates;
}



