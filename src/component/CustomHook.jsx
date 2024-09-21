import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseQuote = () => {
    const [quote, setQuote] = useState([""]);
    const url = "";
    
    const handleQuote = async () => {
        try {
            const response = await axios.get("https://yurippe.vercel.app/api/quotes?character=lelouch&random=1");
            setQuote(response.data);  // Make sure the structure of the response is correct
            console.log("Quote fetched successfully:", quote);
        } catch (error) {
            console.error('Error fetching the quote:', error);
        }
    };



    // Return an array or an object (using an array in this case)
    return [quote, handleQuote];
};

export default UseQuote;
