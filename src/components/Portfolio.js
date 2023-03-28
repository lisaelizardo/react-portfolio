import React from 'react';


function Portfolio() {
    const styles = {
        card: {
          margin: 25,
          background: '#D2CFCF',
        },
        heading: {
          background: '#D206CA',
          minHeight: 60,
          lineHeight: 3,
          fontSize: '1.2rem',
          color: 'white',
          padding: '0 20px',
        },
        content: {
          padding: 20,
        },
      };

    return (
        <div style={styles.card}>
        <div style={styles.heading}>Portfolio</div>
        <div style={styles.content}>
        <Cards />
        </div>
      </div>
    );
  }






export default Portfolio;
