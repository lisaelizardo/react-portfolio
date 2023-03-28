import React from 'react';
import Form from './Form';

function Contact() {
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
        <div style={styles.heading}>Contact</div>
        <div style={styles.content}>
      <Form />
        </div>
      </div>
    );
  }
  
  export default Contact;