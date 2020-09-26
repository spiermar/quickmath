import React from 'react';
import Button from '@material-ui/core/Button';
import TypoGraphy from '@material-ui/core/Typography'

const styles = {
  headerText: {
    textAlign: 'center',
    marginBottom: 50,
  },
  lessonButton: {
    margin: 'auto',
    display: 'block',
    marginBottom: 10,
  }
}

function Home() {
  return (
    <div>
      <TypoGraphy style={styles.headerText} variant="h3" color="inherit">Quick Math</TypoGraphy>
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
  );
}

export default Home;
