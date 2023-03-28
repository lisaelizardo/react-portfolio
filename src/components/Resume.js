import React from 'react';


function Resume() {
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
        <div style={styles.heading}>Resume</div>
        <div style={styles.content}>
        <strong>Resume:
                <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/resume.rtf"}>  Download My resume</a></strong>

        </div>
      </div>
    // <div><p>Hello World!</p></div>
    );
  }
  
  export default Resume;