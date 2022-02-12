import express from "express";
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const users = []

//users/2 req.params--parameters to the funtion
router.get('/:id', (req, res) => {
    const id = req.params.id
    const foundUser = users.find((user) => {
       user.id === id 
    })
    console.log('this is found user', foundUser)
    // res.send(foundUser)
})

//all the routes in this already start with /users because it is in the index.js
//browsers can only make get request
router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})


router.post('/', (req, res) => {
    const user = req.body
    const userWithId = {...user, id: uuidv4()}
    users.push(userWithId)
    res.send(`new user ${user.firstName} added!`)
})


export default router