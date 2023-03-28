import React from 'react';

// const styles = {
//   card: {
//     margin: 25,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#3f51b5',
//     minHeight: 60,
//     lineHeight: 3,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

function Header() {
  const styles = {
    card: {
      margin: 25,
      background: '#D2CFCF',
    },
    heading: {
      background: '#D206CA',
      minHeight: 60,
      lineHeight: 3,
      fontSize: '2rem',
      color: 'white',
      padding: '0 20px',
    },
  };

    return (
      <div style={styles.card}>
        <div style={styles.heading}>Alissa Elizardo</div>
      </div>
    );
  }
  
  export default Header;