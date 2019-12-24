const bcrypt = require('bcrypt')


module.exports = {
register: async (req, res) => {
    const db = req.app.get('db')
    const {username, password, profile_img} = req.body
    const found = await db.find_user([username])
    if(+found[0].count!==0){
        return res.status(409).send({message: "username already registered"})
    }
    const user_id = await db.add_user({username, profile_img})

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    db.add_hash({user_id: user_id[0].id, hash})
    req.session.member = {user_id: user_id[0].id, username, profile_img}

    res.status(201).send({message: 'logged in', user: req.session.user})
},
login: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body 
    const found = await db.find_user([username])
    if(+found[0].count === 0){
        return res.status(401).send({message: 'An account with that username does not exist'})
    }
    const foundUser = await db.find_hash([username])
    const {hash, user_id, profile_img} = foundUser[0]
    const result = bcrypt.compareSync(password, hash)
    if(!result){
        return res.status(401).send({message: 'password incorrect'})
    }else {
        req.session.user = {user_id, username, profile_img}
        res.status(200).send({message: 'logged in', member: req.session.user})
    }
},
logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
  }
}