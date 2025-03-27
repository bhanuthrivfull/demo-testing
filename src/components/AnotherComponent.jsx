import React, { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

const AnotherComponent = () => {
    const { exchangeRate, selectedCurrency } = useContext(CurrencyContext);
    const priceINR = 2000; // Different price in another component

    const formattedPrice = new Intl.NumberFormat(selectedCurrency.locale, {
        style: "currency",
        currency: selectedCurrency.code,
    }).format(priceINR * exchangeRate);

    return <h2>New Component Price: {formattedPrice}</h2>;
};

export default AnotherComponent;
