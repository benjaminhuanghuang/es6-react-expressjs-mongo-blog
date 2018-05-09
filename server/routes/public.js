import { postsGetAll, userLogin } from '../database';

export const publicRoutes = app => {
  app.get('/api/get_all_posts', postsGetAll)
}