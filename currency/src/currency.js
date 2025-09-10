import React ,{ useState } from "react";

export default function Currency() {
    const [fromData, setFromData] = useState("USD")
    const [toData, setToData] = useState("INR")
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState()

    async function convert() {
        const from_data = document.forms.from.value;
        const to_data = document.forms.to.value;
        const amount = document.forms.amount.value;

        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from_data}`);
        const data = await response.json();

        const rate = data.rates[to_data];
        const new_amount = (amount * rate).toFixed(2);
        setResult(`${amount} ${from_data} = ${new_amount} ${to_data}`)
    }
    return (
        <div className-="main">
            <h1>Currency Converter</h1>
            <form name="from">
                <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select name="from" value={fromData} onChange={(e) => setFromData(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                </select>
                <select name="to" value={toData} onChange={(e) => setToData(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                </select>
                <button type="button" value="convert" onClick={convert}>Convert</button>
            </form>
            <h1 id="result">{result}</h1>
        </div>
    )

}