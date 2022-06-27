import React, { useState } from 'react';
import Navbar from '../Navbar';
import ReactDOM from 'react-dom';

function Currencyconvertor() {

  const [result2, setResult2] = useState("");

  const createDigits = (n) => {
    let digits = [];
    for (let i = 0; i < n; i++) {
      digits.push(<button key={i} name={i} className="cu-butt " onClick={handalClick2}>{i}</button>);
    }
    return digits;
  }

  const handalClick2 = (e) => {
    setResult2(result2.concat(e.target?.name));
  };

  const clear2 = () => {
    setResult2("");
  };

  const usd = () => {
    let inputdata = result2;
    let caldata = 74;
    let res = inputdata * caldata + " ₹";
    ReactDOM.render(res, document.getElementById('show-doller'));
  }

  const euro = () => {
    let inputdata = result2 * 85 + " ₹";
    ReactDOM.render(inputdata, document.getElementById('show-doller'));
  }
  const jpy = () => {
    let inputdata = result2;
    let caldata = 55;
    let res = inputdata * caldata + " ₹";
    ReactDOM.render(res, document.getElementById('show-doller'));
  }
  const pound = () => {
    let inputdata = result2 * 75 + " ₹";
    ReactDOM.render(inputdata, document.getElementById('show-doller'));
  }

  const cad = () => {
    let inputdata = result2 * 73 + " ₹";
    ReactDOM.render(inputdata, document.getElementById('show-doller'));
  }

  const inr = () => {
    let inputdata = result2;
    let caldata = 1;
    let res = inputdata * caldata + " ₹";
    ReactDOM.render(res, document.getElementById('show-doller'));
  }

  return (
    <>
      <div className='container'>
        <Navbar />

        <div className='currency-box'>
          <h2>Currency Converter</h2>

          <div className="mainscreen-cur">
            <input type="text" id="result2" value={result2} className="screen2" />
            <button onClick={clear2} className="cu-botton" >Clear</button>
          </div>

          <div className="currency-key-set d-flex mt-3">
            {createDigits(10)}
          </div>

          <div className="keyss">
            <div className="key-setss">
              <button type='button' onClick={usd} className="cu-botton">USD</button>
              <button type='button' onClick={euro} className="cu-botton">Euro</button>
              <button type='button' onClick={jpy} className="cu-botton">JPY</button>
              <button type='button' onClick={pound} className="cu-botton">Pound</button>
              <button type='button' onClick={cad} className="cu-botton">CAD $</button>
              <button type='button' onClick={inr} className="cu-botton">&#8593;&#8595;</button>
            </div>
          </div>

          <div className="c-display">
            <p type='number' id="show-doller">0 &#8377;</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Currencyconvertor