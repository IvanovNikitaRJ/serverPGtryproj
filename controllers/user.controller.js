const db = require('../db')

class userController{
    async createUser(req,res){
        const {login, email, pass} = req.body;
        const newUser = await db.query(
        `INSERT INTO persones (login, pass, email) VALUES ($1, $2, $3) RETURNING *`,
        [login, pass, email]);
        res.json(newUser.rows[0]);
    }
    async getAllUsers(req,res){
        const users = await db.query(`SELECT * FROM persones`);
        res.json(users.rows);
    }
    async getOneUser(req,res){
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM persones WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }
    async updateUser(req,res){
        const {id, login, email, pass} = req.body;
        const user = await db.query(`UPDATE persones SET login = $1, pass = $3, email = $2 WHERE id = $4 RETURNING *`, [login, email, pass, id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req,res){
        const id = req.params.id;
        const user = await db.query(`DELETE FROM persones WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new userController();
