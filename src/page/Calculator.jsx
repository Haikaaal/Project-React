import React, { useState } from 'react';
import { Navbar } from "flowbite-react";
import "../index.css";

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (content) => {
    if (content === '=') {
      equals();
    } else if (content === 'AC') {
      clear();
    } else if (content === '×') {
      multiply();
    } else if (content === '÷') {
      divide();
    } else if (content === '±') {
      plusMinus();
    } else if (content === 'DEL') {
      backspace();
    } else if (content === '%') {
      percent();
    } else if (content === 'π') {
      pi();
    } else if (content === 'x ²') {
      square();
    } else if (content === '√') {
      squareRoot();
    } else if (content === 'sin') {
      sin();
    } else if (content === 'cos') {
      cos();
    } else if (content === 'tan') {
      tan();
    } else if (content === 'log') {
      log();
    } else if (content === 'ln') {
      ln();
    } else if (content === 'x^') {
      exponent();
    } else if (content === 'x !') {
      factorial();
    } else if (content === 'e') {
      exp();
    } else if (content === 'rad') {
      radians();
    } else if (content === '∘') {
      degrees();
    } else {
      setDisplay(display + content);
    }
  };

  const equals = () => {
    try {
      if (display.includes('^')) {
        const [base, exponent] = display.split('^');
        setDisplay(Math.pow(base, exponent));
      } else {
        setDisplay(eval(display).toString());
      }
    } catch {
      setDisplay('Invalid');
    }
  };

  const clear = () => setDisplay('');
  const backspace = () => setDisplay(display.slice(0, -1));
  const multiply = () => setDisplay(display + '*');
  const divide = () => setDisplay(display + '/');
  const plusMinus = () => setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  const percent = () => setDisplay((parseFloat(display) / 100).toString());
  const pi = () => setDisplay((parseFloat(display) * Math.PI).toString());
  const square = () => setDisplay((parseFloat(display) ** 2).toString());
  const squareRoot = () => setDisplay(Math.sqrt(parseFloat(display)).toString());
  const sin = () => setDisplay(Math.sin(parseFloat(display)).toString());
  const cos = () => setDisplay(Math.cos(parseFloat(display)).toString());
  const tan = () => setDisplay(Math.tan(parseFloat(display)).toString());
  const log = () => setDisplay(Math.log10(parseFloat(display)).toString());
  const ln = () => setDisplay(Math.log(parseFloat(display)).toString());
  const exponent = () => setDisplay(display + '^');
  const factorial = () => {
    let num = parseFloat(display);
    if (num < 0) return setDisplay('undefined');
    let result = 1;
    for (let i = num; i > 0; i--) result *= i;
    setDisplay(result.toString());
  };
  const exp = () => setDisplay(Math.exp(parseFloat(display)).toString());
  const radians = () => setDisplay((parseFloat(display) * Math.PI / 180).toString());
  const degrees = () => setDisplay((parseFloat(display) * 180 / Math.PI).toString());

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Calculator</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/contacts" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Calculator Section */}
      <div className="bg-[#1c1c1c] font-sans flex justify-center items-center w-full h-screen m-0">
        <div className="max-w-[1000px] p-4 rounded-lg bg-[#2e2e2e] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <input
            type="text"
            className="w-full h-[60px] outline-none text-right text-2xl rounded-md mb-5 pr-3 bg-[#3b3b3b] text-white"
            value={display}
            readOnly
            placeholder="0"
          />
          <div className="flex flex-wrap justify-center">
            <div className="w-[210px] flex flex-wrap justify-evenly">
              {['DEL', '%', 'x !', 'x^', 'ln', 'e', 'x ²', 'log', 'cos', '√', 'sin', 'tan', 'π', '∘', 'rad'].map(func => (
                <button key={func} className="m-1 w-[60px] h-[60px] rounded-md text-xl cursor-pointer transition-all duration-300 bg-[#4b4b4b] text-[#84a9ac] hover:bg-[#5c5c5c]" onClick={() => handleClick(func)}>
                  {func}
                </button>
              ))}
            </div>
            <div className="w-[210px] flex flex-wrap justify-evenly">
              {['AC', '(', ')', '7', '8', '9', '4', '5', '6', '1', '2', '3', '±', '0', '.'].map(func => (
                <button key={func} className={`m-1 w-[60px] h-[60px] rounded-md text-xl cursor-pointer transition-all duration-300 bg-[#4b4b4b] text-[#84a9ac] hover:bg-[#5c5c5c] ${isNaN(func) ? 'basicFunc' : 'num'}`} onClick={() => handleClick(func)}>
                  {func}
                </button>
              ))}
            </div>
            <div className="flex flex-col">
              {['÷', '×', '-', '+', '='].map(func => (
                <button key={func} className="m-1 w-[60px] h-[60px] rounded-md text-xl cursor-pointer transition-all duration-300 bg-[#4b4b4b] text-[#84a9ac] hover:bg-[#5c5c5c]" onClick={() => handleClick(func)}>
                  {func}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;