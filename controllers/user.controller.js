const db = require('../db')

class userController{
    async createUser(req,res){
        const {login, email, passwod} = req.body;
        const newPerson = await db.query(
        `INSERT INTO persones (login, passwod, email) VALUES ($1, $2, $3) RETURNING *`,
        [login, passwod, email]);
        res.json(newPerson.rows(0));


    }
    async getAllUsers(req,res){
        
    }
    async getOneUser(req,res){
        
    }
    async updateUser(req,res){
        
    }
    async deleteUser(req,res){
        
    }
}

module.exports = new userController();
