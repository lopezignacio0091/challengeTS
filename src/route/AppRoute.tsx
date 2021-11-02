import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import HomePage from '../components/pages/HomePage';
import Login from '../components/layout/login/FormularioLogin';


const AppRoute = () => {
    return (
        <>
            <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route path='/login' component={Login} />
            </Switch>
        </>
    )
}

export default AppRoute;