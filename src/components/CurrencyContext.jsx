import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

const currencyMap = {
    in: { symbol: "₹", code: "INR", locale: "hi-IN" },
    en: { symbol: "$", code: "USD", locale: "en-US" },
    zh: { symbol: "¥", code: "CNY", locale: "zh-CN" },
    eu: { symbol: "€", code: "EUR", locale: "fr-FR" },
    gb: { symbol: "£", code: "GBP", locale: "en-GB" },
    jp: { symbol: "¥", code: "JPY", locale: "ja-JP" },
};

export const CurrencyProvider = ({ children }) => {
    const [language, setLanguage] = useState("in"); // Default INR
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate-api.com/v4/latest/INR");
                setExchangeRates(response.data.rates);
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        };
        fetchRates();
    }, []);

    const selectedCurrency = currencyMap[language];
    const exchangeRate = exchangeRates[selectedCurrency.code] || 1;

    return (
        <CurrencyContext.Provider value={{ language, setLanguage, exchangeRate, selectedCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};
