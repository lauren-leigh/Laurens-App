import React from 'react';
import "./quotes.css";
const axios = require('axios');

export async function QuoteFetch() {
    try {
        const response = await axios.get('/quotes');
        console.log('response ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}

export default function Fetcher() {
    QuoteFetch()
    .then(response => console.log(response))
}

//pulling from wrong link