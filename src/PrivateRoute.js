// import React, { useContext } from "react";
// import { Route, redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";

// const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//     const currentUser = useContext(AuthContext);

//     return (
//         <Route
//             {...rest}
//             render={(routeProps) =>
//                 !!currentUser ? (
//                     <RouteComponent {...routeProps} />
//                 ) : (
//                     <redirect to={"/login"} />
//                 )
//             }
//         />
//     );
// };

// export default PrivateRoute;

import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "./Firebase/config";

const PrivateRoute = () => {
    const location = useLocation();

    return auth.currentUser ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;
