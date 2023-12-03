import React from "react";
import { useSelector } from 'react-redux';
import { Route, Routes, } from "react-router";
import { Link } from "react-router-dom";
import "../Css/History.css"

const History = () => {
    const history = useSelector((state) => state);

    return (
        <div className="history-container">

            <h2>Search History</h2>

            <ul className="history-list">

                {history.map((item, idx) => {
                    return <li><Link to={`/${item[0].word}`}>{item[0].word}</Link></li>
                })}

            </ul>



        </div>
    );
};

export default History;
