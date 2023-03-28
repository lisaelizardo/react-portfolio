import React from 'react';

function Navbar() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          fontFamily: 'arial',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}
      >
        <div style={linkStyle}>
          <a href="#">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;