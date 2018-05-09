import { publicRoutes } from './public'
import { userManagementRoutes } from './userManagement'

export const configureRoutes = app => {
    publicRoutes(app);
    userManagementRoutes(app);
    return app;
}