import { useState } from "react";

const Day4 = () => {

    const [amount, setAmount] = useState();
    const [interest, setInterest] = useState();
    const [month, setMonth] = useState();
    const [result, setResult] = useState();

    const handleAmount = ((e) => {
        setAmount(e.target.value)
    });
    const handleInterest = ((e) => {
        setInterest(e.target.value)
    });
    const handleMonth = ((e) => {
        setMonth(e.target.value)
    });

    const handleCalculate = (p,annual,n) => {
        if (!p, !annual, !n) {
            return alert("Please Enter details!")
        }

        const R = annual / 12 / 100;
        const emi = (p * R * Math.pow(1 + R, n)) / (Math.pow(1 + R, n) - 1);
        setResult(emi.toFixed(2))
    }




    return (
        <>
            <h1>
                Emi calculator
            </h1>
            <div>
                <h2>Enter loan Amount</h2>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleAmount}
                />
                 <h2>Enter Interest Rate</h2>
                <input
                    type="number"
                    placeholder="Enter  Interest Rate"
                    value={interest}
                    onChange={handleInterest}
                />
                 <h2>Enter Month</h2>
                <input
                    type="number"
                    placeholder="Enter month"
                    value={month}
                    onChange={handleMonth}
                />
            </div>
            <div style={{marginTop: "5px"}}>
                <button onClick={()=> handleCalculate(amount,interest,month)}
                >Calculate Emi</button>
                <h2>Amount Per Month:{ result}</h2>
            </div>
        </>
    )
}
export default Day4;