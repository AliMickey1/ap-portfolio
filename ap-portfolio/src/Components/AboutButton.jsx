import React from 'react';
// import About from '../Pages/About';

const MyButton = () => {
  const handleClick = () => {

    alert('Button clicked!');
    // <About id="About"/>
  };

  return (
    <button onClick={handleClick}>
      <span className="btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
          <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
            <path d="M0 9l8 4 8-4" />
            <path opacity=".5" d="M0 5l8 4 8-4" />
            <path opacity=".25" d="M0 1l8 4 8-4" />
          </g>
        </svg>
      </span>
      <span>About Me</span>
    </button>
  );
};

export default MyButton;