import axios from 'axios';
import Joi from 'joi';

const schema = Joi.object({
    nome: Joi.string()
        .required(),
    cpf: Joi.string()
        .pattern(new RegExp('([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})')),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
    .required()});

export const register = async (payload) => {
    const endpoint = `${process.env.REACT_APP_MOCK_SERVER}/users/register`;
    try {
        const { error } = schema.validate(payload);
        
        if(error){
            throw error;
        }
        
        const { data: { accessToken } } = await axios.post(endpoint, payload)
        
        return {
            token: accessToken,
        }
    } catch (error) {
        return {
            error: "Error ao tentar cadastrar o vendedor."
        }
    }
}