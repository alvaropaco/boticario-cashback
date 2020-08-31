import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import moment from 'moment';
import { create } from '../../../services/orders';

const initialState = () => {
  const dt = new Date();
  return {
    datetime: dt.getTime()
  }
}

const OrdersForm = () => {
  const [ error, setError ] = useState(null);
  const [ token, setToken ] = useState(null);
  const [values, setValues] = useState(initialState());
  
  const onchange = async e => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = async e => {
    e.preventDefault();
    const { token, error } = await create(values)
    
    if(error) {
      await setError(error);
      setTimeout(() => { setError(null); }, 9000);
    }
    
    await setToken(token)
    setTimeout(() => { setToken(null); }, 9000);
  }

  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Cadastrar nova Compra
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="code"
            name="code" 
            label="Código da Compra" 
            fullWidth
            onChange={onchange}
            value={values.code} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            required
            id="amount"
            name="amount"
            label="Valor total"
            fullWidth
            onChange={onchange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            value={values.amount}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="datetime"
            name="datetime"
            label="Data"
            type="date"
            defaultValue={moment(values.datetime).format('DD/MM/YYYY')}
            fullWidth
            onChange={onchange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          { 
          error 
            ? <Alert severity="error">{error}</Alert>
            : <></>
          }
          {
            token
              ? <Alert severity="success">This is a success alert — check it out!</Alert>
              : <></>
          }
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default OrdersForm;
