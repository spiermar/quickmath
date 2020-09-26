import React from 'react';
import Button from '@material-ui/core/Button'

const styles = {
  logoContainer: {
    textAlign: 'center',
  },
  lessonButton: {
    display: 'block',
    margin: 'auto',
    marginBottom: 15,
    backgroundColor: "#70C6C7",
    color: "#F1FAEE",
  },
  buttons: {
  }
}

function Home() {
  return (
    <div>
      <div style={styles.logoContainer}>
        <img alt="logo" src="logo.png" height="256px" />
      </div>
      <div style={styles.buttons}>
        <Button style={styles.lessonButton} variant="contained" color="primary">
          Double Digit Sum
        </Button>
        <Button style={styles.lessonButton} variant="contained" color="primary">
          Triple Digit Sum
        </Button>
        <Button style={styles.lessonButton} variant="contained" color="primary">
          Double Digit Sub
        </Button>
        <Button style={styles.lessonButton} variant="contained" color="primary">
          Triple Digit Sub
        </Button>
        <Button style={styles.lessonButton} variant="contained" color="primary">
          Single Digit Multi
        </Button>
        <Button style={styles.lessonButton} variant="contained" color="primary">
          Double Digit Multi
        </Button>
      </div>
    </div>
  );
}

export default Home;
