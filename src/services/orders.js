import axios from 'axios';

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