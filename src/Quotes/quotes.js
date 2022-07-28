import { React, useState, useEffect } from 'react';
import "./quotes.css";

const QuoteFetch = () => {
    const  [hasError, setErrors] =  useState(false)
    const  [quotes, setQuotes] = useState({}) 
  
    
    async function fetchData() {
        const response = await fetch("https://api.quotable.io/random")
            response.json()
                .then(response => setQuotes(response))
                .catch(err => setErrors(err));
        }
        useEffect(() => {
            fetchData()
    });

    return (
        <div>
            <span>{JSON.stringify(quotes)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    )
}

export default QuoteFetch


// pulls correctly, but pulls constantly :\ 