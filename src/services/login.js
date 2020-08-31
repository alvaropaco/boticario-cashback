const { default: Login } = require("../Components/Login")

export const login = ({ email, password }) => {
    return {
        token: null,
        error: "Usuário e/ou senha inválidos."
    }
}