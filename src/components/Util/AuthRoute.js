import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const AuthRoute = ({ component: RouteComponent, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => 
                auth === true ? (
                    <Redirect to="/"/>
                ) : (
                    <RouteComponent {...routeProps} />
                )
            }
        />
    )
}

export default AuthRoute;