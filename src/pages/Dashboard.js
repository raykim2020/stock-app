import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

// Data stuffs
import stocksList from '../data'


export default function Dashboard() {
    const apiKey = "81fd764353c528de61e3bbb704047cc0"
    const stockURL = stocksList.map((s => s.symbol)).join(',')
    const URL = `https://financialmodelingprep.com/api/v3/quote/${stockURL}?apikey=${apiKey}`
    const [stocks, setStocks] = useState([]);



    return (
        <main>
            <h1>Stocks</h1>
            <p>{stockURL}</p>
            <ul>
                {
                    stocksList.map((stock, idx) => {
                        const { symbol } = stock
                        return (
                            <li key={idx}>
                                <Link to={`/stocks/${symbol}`}>
                                    {symbol}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}