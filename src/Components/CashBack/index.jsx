import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bgBlue: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    padding: '0 30px',
    margin: 8,
  },
});

const CashBack = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.bgBlue}>
        <Typography gutterBottom variant="h5" component="h2">
            Total de Cashback acumulado
        </Typography>
        <Typography variant="h3" color="textSecondary" component="p">
            R$ 100,00
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CashBack;
