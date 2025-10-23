import React from 'react';

function HelloReact() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, React! 👋</h1>
      <p>
        The current time is: <strong>{currentTime}</strong>
      </p>
    </div>
  );
}

export default HelloReact;
