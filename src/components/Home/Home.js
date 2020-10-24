import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const styles = {
    logoContainer: {
        height: 256,
        textAlign: 'center',
    },
    lessonButton: {
        display: 'block',
        margin: 'auto',
        marginBottom: 15,
        backgroundColor: '#70C6C7',
        color: '#F1FAEE',
    },
    disabledLessonButton: {
        backgroundColor: '#DCF1E8',
        color: '#86CFCE',
    },
    buttonContainer: {
        margin: 'auto',
    },
    container: {
        height: 'calc(100vh - 272px)',
        display: 'flex',
        alignItems: 'center',
    }
}

function Home() {
  let history = useHistory();
  
  return (
    <div>
      <div style={styles.logoContainer}>
        <img alt="logo" src="logo.png" height="256px" />
      </div>
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <Button style={styles.lessonButton} variant="contained" size="large" color="primary" onClick={() => { history.push("/doubledigitsum") }}>
            Double Digit Sum
          </Button>
          <Button disabled style={{ ...styles.lessonButton, ...styles.disabledLessonButton}} variant="contained" size="large" color="primary">
            Triple Digit Sum
          </Button>
          <Button disabled style={{ ...styles.lessonButton, ...styles.disabledLessonButton}} variant="contained" size="large" color="primary">
            Double Digit Sub
          </Button>
          <Button disabled style={{ ...styles.lessonButton, ...styles.disabledLessonButton}} variant="contained" size="large" color="primary">
            Triple Digit Sub
          </Button>
          <Button disabled style={{ ...styles.lessonButton, ...styles.disabledLessonButton}} variant="contained" size="large" color="primary">
            Single Digit Multi
          </Button>
          <Button disabled style={{ ...styles.lessonButton, ...styles.disabledLessonButton}} variant="contained" size="large" color="primary">
            Double Digit Multi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
