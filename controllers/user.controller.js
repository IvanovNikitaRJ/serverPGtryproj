const db = require('../db')

class userController{
    async createUser(req,res){
        const {login, email, passwod} = req.body;
        const newUser = await db.query(
        `INSERT INTO persones (login, passwod, email) VALUES ($1, $2, $3) RETURNING *`,
        [login, passwod, email]);
        res.json(newUser.rows(0));
    }
    async getAllUsers(req,res){
        const users = await db.query(`SELECT * FROM persones`);
        res.json(users.rows);
    }
    async getOneUser(req,res){
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM personese WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }
    async updateUser(req,res){
        const {id, login, email, passwod} = req.body;
        const user = await db.query(`UPDATE persones SET login = $1, passwod = $2, email = $3, id = $4 RETURNING *`, [login, email, passwod, id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req,res){
        const id = req.params.id;
        const user = await db.query(`DELETE * FROM personese WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new userController();
