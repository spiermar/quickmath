import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const styles = {
    card: {
        color: '#F1FAEE',
        backgroundColor: '#70C6C7',
        minWidth: 275,
        margin: 'auto',
    },
    cardContent: {
        textAlign: 'center',
    },
    container: {
        height: 'calc(100vh - 16px)',
        display: 'flex',
        alignItems: 'center',
    },
    number: {
        fontWeight: 500,
        display: 'inline',
    },
    operand: {
        display: 'inline',
        marginLeft: 15,
        marginRight: 15,
    },
    answer: {
        marginTop: 25,
        marginBottom: 45,
        display: 'block',
    },
    nextButton: {
        display: 'block',
        margin: 'auto',
        fontSize: 32,
        marginBottom: 15,
        backgroundColor: '#DCF1E8',
        color: '#86CFCE',
    },
    homeButton: {
        position: 'fixed',
        top: 25,
        left: 25,
        backgroundColor: '#70C6C7',
        color: '#F1FAEE',
    }
};

class Lesson extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstNumber: 56,
            secondNumber: 21,
        }
    }

    handleNextClick = () => {
        console.log("next")
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Button style={styles.homeButton} variant="contained" size="large" color="primary" onClick={() => { this.props.history.push("/") }}>
                        Home
                    </Button>
                    <Card style={styles.card}>
                        <CardContent style={styles.cardContent}>
                            <Typography style={styles.number} variant="h2" gutterBottom>
                                {this.state.firstNumber}
                            </Typography>
                            <Typography style={styles.operand} variant="h3" gutterBottom>
                                +
                            </Typography>
                            <Typography style={styles.number} variant="h2" gutterBottom>
                                {this.state.secondNumber}
                            </Typography>
                            <TextField style={styles.answer} variant="outlined" type="number" />
                            <Button style={styles.nextButton} variant="contained" size="large" color="primary" onClick={this.handleNextClick}>
                                Next
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

Lesson.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
}

export default withRouter(Lesson);