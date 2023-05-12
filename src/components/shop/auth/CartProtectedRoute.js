import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "./fetchApi";


// =({children})={ {children} }
// <Layout children={<CheckoutComponent />} />  HTML TYPE

//({comp:comp,})-->(<Route {}>)

//comp is jsx function takes props

//path="/checkout"
const CartProtectedRoute = ({ component: Component, ...rest }) => (
  
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("cart")).length !== 0 &&
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default CartProtectedRoute;
