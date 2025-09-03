import React from 'react';

const Button = ({ text, className, href, ...props }) => { // 1. Accept 'href' and other props
  return (
    <a
      href={href} // 2. Use the href prop here
      target="_blank" // 3. Add this to open in a new tab
      rel="noopener noreferrer" // 4. Add this for security
      className={`${className ?? ''} cta-wrapper`}
      {...props} // 5. This passes down any other props like 'id'
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;