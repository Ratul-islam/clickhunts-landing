import React from 'react';

const AnimatedWrapper = ({ children }) => {
  return (
    <div className="animate-ripple-shock">
      {children}
    </div>
  );
};

export default AnimatedWrapper;
