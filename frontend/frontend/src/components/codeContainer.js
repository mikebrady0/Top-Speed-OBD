import './codeContainer.css';
import React, { useState } from 'react';

const CodeContainer = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('')

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleMakeChange = (e) => {
        setMake(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch('https://api.placeholder.com/obdii/${code}');
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error fetching OBDII code:', error);
            setResult({ error: `Failed to fetch OBDII information: ${year} ${make} ${model}`});
        }
    };


    return(
        <div className="parent">
            <div className="codeContainer">
                <input className='year' value={year} onChange={handleYearChange} type="text" placeholder='Year'/>
                <input className='make' value={make} onChange={handleMakeChange} type='text' placeholder='Make' />
                <input className='model' value={model} onChange={handleModelChange} type='text' placeholder='Model'/>
                <button className="searchButton" onClick={handleSearch}>Search</button>
                <input className="codeInput" type="text" value={code} placeholder='Enter OBDII Code' onChange={handleCodeChange}/>
            </div>
            {result && (
                <div className='resultContainer'>
                    {result.error ? (
                        <p>{result.error}</p>
                    ) : (
                        <p>{JSON.stringify(result)}</p>
                    )}
                    </div>
            )}
        </div>
    );
};

export default CodeContainer;