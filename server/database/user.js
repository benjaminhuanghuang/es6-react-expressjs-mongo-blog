// User Management Logic
export const userLogin = (req, res) => {
    res.json({ username: 'User Login Username: ' +         
               req.body.username })
}