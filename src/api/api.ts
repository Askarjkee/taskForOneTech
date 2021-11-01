import axios from 'axios';

const apiKey = 'bd8cb570-3774-11ec-a58c-33397bc21577';

const baseURL = 'https://freecurrencyapi.net/api/v2/';

const instance = axios.create({
    baseURL
})

export const exchangeAPI = {
    getExchange: () => {
        return instance.get(`latest?apikey=${apiKey}&base_currency=KZT`)
            .then(res => res.data.data)
            .catch((error) => {
                console.log(error)
            })
    }
}
