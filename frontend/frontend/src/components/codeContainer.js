import './codeContainer.css';
import React, { useState } from 'react';

const CodeContainer = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('')

    const handleSave = async () => {
        if (!year || !make || !model || !code || !result) {
            alert('All fields are required for lookup.')
            return;
        }

        const lookup = { year, make, model, code, result };
        console.log('Saving lookup data:',lookup);

        try {
            const response = await fetch('http://localhost:5000/api/lookups', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(lookup),
            });

            if (response.ok) {
                alert('Lookup saved seuccessfully!');
                setYear('');
                setMake('');
                setModel('');
                setCode('');
                setResult('');
            } else {
                alert('Failed to save lookup');
            }
        } catch (error) {
            console.error('Error saving lookup', error);
        }
    }

    
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

        // API CALL -------------------------------------------------------------------- //
        const response = await fetch(`https://car-code.p.rapidapi.com/obd2/${code}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a59355c55msh2d230a5511a7816p1404fcjsnec688db80a30',
                'x-rapidapi-host': 'car-code.p.rapidapi.com'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data) {
                setResult(data);
            } else {
                setResult({error : 'No data found in this code.'});
            }
        } else {
            setResult({error: 'Code not found'});
        }
    };


    return(
        <div className="parent">
            <div className="codeContainer">
                <input className='year' value={year} onChange={handleYearChange} type="text" placeholder='Year'/>
                <input className='make' value={make} onChange={handleMakeChange} type='text' placeholder='Make' />
                <input className='model' value={model} onChange={handleModelChange} type='text' placeholder='Model'/>
                <button className='saveBtn' onClick={handleSave}>Save</button>
                <button className="searchButton" onClick={handleSearch}>Search</button>
                <input className="codeInput" type="text" value={code} placeholder='Enter OBDII Code' onChange={handleCodeChange}/>
            </div>
            {result && (
                <div className='resultContainer'>
                    {result.error ? (
                        <p>{result.error}</p>
                    ) : (
                        <div>
                            <h3><strong>{year} {make} {model}</strong></h3>
                            <p><strong>{result.code}: {result.definition}</strong></p>
                                <div>
                                    <p>Possible Causes</p>
                                        <ul>
                                            {result.cause.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                        </ul>
                                </div>
                            </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CodeContainer;