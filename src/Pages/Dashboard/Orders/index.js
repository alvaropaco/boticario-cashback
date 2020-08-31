import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { loadOrders } from '../../../services/orders';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Orders = () => {
  const [values, setValues] = useState([])
  const classes = useStyles();

  useEffect(() => {
      fetchData();
    },
    []
  );

  const fetchData = async () => {
    const { orders } = await loadOrders()
    await setValues(orders)
  }

  function formatCurrency(numberStr){
    const number = +numberStr;
    var formatted = "R$ " + number.toFixed(2).replace(".",",");
    return formatted;
  }

  const getCashBackAmount = (amount, percentage) => {
    return formatCurrency(amount * percentage)
  }

  const getStatusLabel = statusCode => {
    const statuses = {
      0:"Em validação", 
      1: "Reprovado", 
      2: "Aprovado"
    };
    return statuses[statusCode];
  }
  const getDateStr = timestamp => {
    return moment(Date(timestamp)).format('DD/MM/YYYY');
  }

  const renderOrdersList = orders => {
    orders = orders || []
    return (<List className={classes.root}>
        {orders.map(order => 
          <ListItem key={order.id} alignItems="flex-start">
            <Divider variant="inset" component="li" />
            <ListItemText
              primary={`${getDateStr(order.datetime)} - ${order.code} (${getStatusLabel(order.status)})`}
              secondary={`Total: R$ ${formatCurrency(order.amount)} - Cashback: R$ ${getCashBackAmount(order.amount, order.cashBackPercent)} (${order.cashBackPercent}%)`}
            />
          </ListItem>
          )}
      </List>)
  }

  return (
    <>
      <h2>Lista de Compras</h2>
      {renderOrdersList(values)}
    </>);
}

export default Orders;
