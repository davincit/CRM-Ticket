import { Redirect, Route } from "react-router-dom";
import { Layout } from "../../layout/Layout";

const isAuth = true;
export const PrivateRoute = ({ children, ...props }) => {
  return (
    <Route
      {...props}
      render={() =>
        isAuth ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    />
  );
};
