import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "./CurrencyContext";

const PriceConverter = () => {
    const [products, setProducts] = useState([]);
    const { language, setLanguage, exchangeRate, selectedCurrency } = useContext(CurrencyContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

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

            <h3>Product Prices:</h3>
            <ul>
                {products.map(product => {
                    const convertedPrice = (product.price * exchangeRate).toFixed(2);
                    const formattedPrice = new Intl.NumberFormat(selectedCurrency.locale, {
                        style: "currency",
                        currency: selectedCurrency.code,
                    }).format(convertedPrice);

                    return (
                        <li key={product.id}>
                            {product.title}: {formattedPrice}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PriceConverter;
