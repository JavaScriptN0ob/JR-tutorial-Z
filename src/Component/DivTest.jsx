import React from 'react';

function DivTest({
  className,
  children,
}) {
  return (
    <div 
      className={className}
      style={{
        border: "1px solid red",
        width: "100px",
        display: "block",
      }}
    >
      {children}
    </div>
  )
}

export default DivTest;