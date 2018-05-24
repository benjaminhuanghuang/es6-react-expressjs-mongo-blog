export const publicRoutes = app => {
  app.get('/', (req, res) => {
    res.json({ message: 'Hello GET from ROOT' })
  })
  app.post('/', (req, res) => {
    res.json({ message: 'Hello POST from ROOT' })
  })
}