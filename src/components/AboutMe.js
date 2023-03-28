import React from 'react';

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

function AboutMe() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>About Me</div>
        <div style={styles.content}>
            My name is Alissa Elizardo. I am currently in a Coding/Web Development bootcamp. Soon I will be working on getting 
            into the field as a full-time position. I am a single mother who is working full-time and going to school with many 
            other life events going on as everyone else. I will continue working on my projects after I graduate to get them and
            myself better suited for this world.
        </div>
      </div>
    );
  }
  
  export default AboutMe;