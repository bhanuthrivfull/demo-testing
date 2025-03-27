import React, { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

const PriceConverter = () => {
    const { language, setLanguage, exchangeRate, selectedCurrency } = useContext(CurrencyContext);
    const priceINR = 1400;

    const formattedPrice = new Intl.NumberFormat(selectedCurrency.locale, {
        style: "currency",
        currency: selectedCurrency.code,
    }).format(priceINR * exchangeRate);

    return (
        <div>
            <label>
                Select Country:
                <br />
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="in">हिन्दी (INR)</option>
                    <option value="en">English (USD)</option>
                    <option value="zh">中文 (CNY)</option>
                    <option value="eu">Français (EUR)</option>
                    <option value="gb">English (GBP)</option>
                    <option value="jp">日本語 (JPY)</option>
                </select>
            </label>

            <span>{`Price: ${formattedPrice}`}</span>
        </div>
    );
};

export default PriceConverter;
