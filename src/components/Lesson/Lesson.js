import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
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
        marginBottom: 25,
        display: 'block',
    }
});


function Lesson() {
    const classes = useStyles();
    const firstNumber = 56;
    const secondNumber = 21;

    return (
        <div>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.number} variant="h2" gutterBottom>
                            {firstNumber}
                        </Typography>
                        <Typography className={classes.operand} variant="h3" gutterBottom>
                            +
                        </Typography>
                        <Typography className={classes.number} variant="h2" gutterBottom>
                            {secondNumber}
                        </Typography>
                        <TextField className={classes.answer} variant="outlined" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Lesson;