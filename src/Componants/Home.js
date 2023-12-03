import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DisplayResult from './DisplayResult';


const Home = () => {

    const [result, setResult] = useState([]);

    return (
        <div className='home-page'>
            <SearchBar setResult={setResult}/>
            <DisplayResult result={result}/>
        </div>
    );
}

export default Home;
