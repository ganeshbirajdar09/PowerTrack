import { ExcludedPath, ExcludedPaths } from "../utilities/authorize";
import { Route, Routes } from "./routes.types";
import Routers from "../feature-modules/index"


export const routes: Routes = [
    new Route("/users", Routers.UserRouter),
    new Route("/auth", Routers.AuthRouter),
    new Route("/client", Routers.ClientRouter),
    new Route("/bill", Routers.BillRouter),
];


export const excludedPaths: ExcludedPaths = [
    new ExcludedPath("/auth/login", "POST"),
    new ExcludedPath("/auth/register", "POST"),
];