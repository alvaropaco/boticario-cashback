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
    datetime: Joi.number()
    .required()});

export const create = async (payload) => {
    const endpoint = `${process.env.REACT_APP_MOCK_SERVER}/compras`;
    try {
        const datetime = new moment(payload.datetime);
        payload.datetime = datetime.unix();
        const { error } = schema.validate(payload);

        payload.cashBackPercent = 0.01;
        payload.status = 0;
        
        if(error){
            throw error;
        }
        
        const { data: { accessToken } } = await axios.post(endpoint, payload)
        
        return {
            token: accessToken,
        }
    } catch (error) {
        debugger
        return {
            error: "Error ao tentar cadastrar o vendedor."
        }
    }
}