import {BASE_CURRENCY} from "./available-currencies";

const API_KEY = '60cce44ce9014d0ea33a46e371e4eeb8';
const  API_URL = 'https://openexchangerates.org/api/';

export const GET_CURRENCIES_RATES = `${API_URL}latest.json?app_id=${API_KEY}&base=${BASE_CURRENCY}`;