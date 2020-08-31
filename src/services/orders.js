import axios from 'axios';
import Joi from 'joi';
import moment from 'moment';

export const loadOrders = async () => {
    const endpoint = `${process.env.REACT_APP_MOCK_SERVER}/compras`;
    try {
        const { data } = await axios.get(endpoint)
        
        return {
            orders: data,
        }
    } catch (error) {
        return {
            error: "Error ao tentar carregar as compras."
        }
    }
}

const schema = Joi.object({
    code: Joi.string()
        .required(),
    amount: Joi.number()
        .required(),
    datetime: Joi.string()
    .required()});

export const create = async (payload) => {
    const endpoint = `${process.env.REACT_APP_MOCK_SERVER}/compras`;
    try {
        const { error } = schema.validate(payload);

        payload.cashBackPercent = 0.01;
        payload.status = 0;
        
        if(error){
            throw error;
        }
        
        const { data } = await axios.post(endpoint, payload)
        
        return {
            data
        }
    } catch (error) {
        debugger
        return {
            error: "Error ao tentar cadastrar o vendedor."
        }
    }
}