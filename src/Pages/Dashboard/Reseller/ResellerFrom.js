import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { register } from '../../../services/reseller';

const ResellerForm = () => {
  const [ error, setError ] = useState(null);
  const [ token, setToken ] = useState(null);
  const [values, setValues] = useState({});
  
  const onchange = e => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = async e => {
    e.preventDefault();
    const { token, error } = await register(values)
    
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
        Cadastrar Revendedor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="nome"
            name="nome" 
            label="Nome Completo" 
            fullWidth
            onChange={onchange}
            value={values.nome} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            onChange={onchange}
            value={values.cpf}
            mask="999.999.999-99"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            onChange={onchange}
            value={values.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="password"
            id="password"
            name="password"
            label="Senha"
            fullWidth
            onChange={onchange}
            value={values.password}
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
              ? <Alert severity="success">Revendedor cadastrado.</Alert>
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

export default ResellerForm;
