import './codeContainer.css';

const CodeContainer = () => {
    return(
        <div className="parent">
            <div className="codeContainer">
                <button className="searchButton">Search</button>
                <input className="codeInput" type="text" placeholder='Enter OBDII Code'/>
            </div>
        </div>
    );
};

export default CodeContainer;