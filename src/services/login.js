import axios from 'axios';

export const login = async (payload) => {
    const endpoint = `${process.env.REACT_APP_MOCK_SERVER}/login`;
    try {
        const { data: { accessToken } } = await axios.post(endpoint, payload)
        return {
            token: accessToken,
        }
    } catch (error) {
        return {
            error: "Usuário e/ou senha inválidos."
        }
    }
}