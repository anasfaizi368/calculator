import logo from '../../logo.svg';
import './HomeCSS.css';
import Employee from "../../Data/Employee.json"
import { useEffect, useState } from 'react';

function Home() {
  const [value1, setValue1] = useState("") //"1+2" sum.split("+")
  const [value2, setValue2] = useState("") //"1+2" sum.split("+")
  const [opt, setOpt] = useState(null);
  const [finalValue, setfinalValue] = useState(null);

  const getSelectedInteger = (inComingValue) => {
    
    if (opt == null) {
      setValue1(value1 + inComingValue)
    } else {
      setValue2(value2 + inComingValue) //505
    }
  }

  const calculateValue = () => {
  
    if (opt == "*") {
      setfinalValue(Number(value1) * Number(value2))
    }
    if (opt == "+") {
      setfinalValue(Number(value1) + Number(value2))

    }
    if (opt == "-") {
      setfinalValue(Number(value1) - Number(value2))
    }
    if (opt == "/") {
      setfinalValue(Number(value1) / Number(value2))

    }
    if (opt == "**") {
      setfinalValue(Number(value1) ** Number(value2))

    }
    if (opt == "%") {
      setfinalValue(Number(value1) % Number(value2))

    }
    else {

    }

  }

  useEffect(() => calculateValue(), [value1, value2, opt])

  return (
    <>
  
      <div className='main-div'>
        <div className="parnt-div">

          <h1 style={{ textAlign: "center", color: "red" }}>calculator</h1>
          <div className='answer-div'>
            <h2>{value1}{opt}{value2}</h2>
          </div>
          <p style={{ color: "red" }}>Answer is ={finalValue == null ? "0" : finalValue}</p>


          <div className='buttons-name'>
            <button className='button' onClick={() => getSelectedInteger(1)}>1</button>
            <button className='button' onClick={() => getSelectedInteger(2)}>2</button>
            <button className='button' onClick={() => getSelectedInteger(3)}>3</button>
            <button className='button' onClick={() => getSelectedInteger(4)}>4</button>
            <button className='button' onClick={() => getSelectedInteger(5)}>5</button>
            <button className='button' onClick={() => getSelectedInteger(6)}>6</button>
            <button className='button' onClick={() => getSelectedInteger(7)}>7</button>
            <button className='button' onClick={() => getSelectedInteger(8)}>8</button>
            <button className='button' onClick={() => getSelectedInteger(9)}>9</button>
            <button className='button' onClick={() => getSelectedInteger(0)}>0</button>
            <button className='button' onClick={() => getSelectedInteger("00")}>00</button>
            <button className='button' onClick={() => getSelectedInteger(".")}>.</button>


            <button className='button' onClick={() => setOpt("+")}>+</button>
            <button className='button' onClick={() => setOpt("-")}>-</button>
            <button className='button' onClick={() => setOpt("/")}>/</button>
            <button className='button' onClick={() => setOpt("*")}>*</button>
            <button className='button' onClick={() => setOpt("**")}>**</button>
            <button className='button' onClick={() => setOpt("%")}>%</button>
            <button className='button' onClick={() => {
              setValue1("")
              setValue2("")
              setOpt(null)
              setfinalValue(null)
            }}>c</button>

            <button className='button' onClick={() => {
              setValue2("")
              setOpt(null)
              setValue1(finalValue)
            }}>=</button>


          </div>
        </div>
      </div>

      
    </>


  
  );
}


export default Home;





