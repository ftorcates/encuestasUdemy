import { Route, Redirect , RouteProps, RouteComponentProps } from "react-router-dom";
import { useAuthState } from "../context/authContext";
import { RouteType } from "../types";

interface AppRouteProps extends RouteProps {
    component: any,
    routeType: RouteType
}

const AppRoute = (props: AppRouteProps) => {

    const { component: Component, path, routeType, ...rest } = props;

    //Para saber si usuario esta autenticado
    const user = useAuthState();

    //const renderComponent = (routeProps: RouteCo

    return null;
}

export default AppRoute;