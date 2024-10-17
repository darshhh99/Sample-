import React from 'react';

const Header = () => {
  // Define the custom styles with padding at the top
  const headerStyle = {
    backgroundColor: '#007bff', // Bootstrap primary color (or your choice)
    color: 'white',
    padding: '20px 0', // Add padding to the top and bottom
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: 'Poppins, sans-serif',
    marginTop: '20px', // Add margin to push the header down
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional: adds shadow for depth
  };

  return (
    <header style={headerStyle}>
      <h1>Basic Components in React</h1>
    </header>
  );
};

export default Header;
