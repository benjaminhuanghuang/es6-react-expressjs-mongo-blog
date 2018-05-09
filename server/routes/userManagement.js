import { postsGetAll, userLogin } from '../database'

export const userManagementRoutes = app => {
  app.post('/api/login_user', userLogin)
}
