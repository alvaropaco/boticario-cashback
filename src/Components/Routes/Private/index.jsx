import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../../../store/Context';
import Menu from '../../Menu';

const RoutesPrivate = ({ component: Component, ...rest }) => {
    const { token } = useContext(Context);

    return (
        <Route 
            { ...rest }
            render={() => token 
                ? <Menu><Component { ...rest } /></Menu>
                : <Redirect to="/" /> 
            }
        />
    )
}

export default RoutesPrivate;