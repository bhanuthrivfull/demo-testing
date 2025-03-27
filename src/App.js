import React from "react";
import { CurrencyProvider } from "./components/CurrencyContext";
import PriceConverter from "./components/PriceConverter";
import AnotherComponent from "./components/AnotherComponent";

function App() {
    return (
        <CurrencyProvider>
            <PriceConverter />
            <AnotherComponent />
        </CurrencyProvider>
    );
}

export default App;
