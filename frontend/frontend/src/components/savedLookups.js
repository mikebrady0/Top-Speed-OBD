import React, { useState, useEffect } from 'react';
import './savedLookups.css';

const SavedLookups = () => {
    const [savedLookups, setSavedLookups] = useState([]);

    useEffect(() => {
        const fetchLookups = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/lookups');
                const data = await response.json();
                setSavedLookups(data);
            } catch (error) {
                console.error('Error fetching saved lookups:', error);
            }
        };
        fetchLookups();
    }, []);

    return (
        <div>
            <h1 className="lookupTitle">Saved Lookups</h1>
            {savedLookups.length === 0 ? (
                <p>No saved lookups</p>
            ) : (
                <ul>
                    {savedLookups.map((lookup, index) => {
                        return (
                            <li className="resultContainer" key={index}>
                                <p><strong>Year: </strong>{lookup.year}</p>
                                <p><strong>Make: </strong>{lookup.make}</p>
                                <p><strong>Model: </strong>{lookup.model}</p>
                                <p><strong>Code: </strong>{lookup.code}</p>
                                <p><strong>{lookup.result?.code}: {lookup.result?.definition}</strong></p>

                                <div>
                                    <p>Possible Causes</p>
                                        <ul>
                                            {lookup?.result?.cause.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                        </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default SavedLookups;
