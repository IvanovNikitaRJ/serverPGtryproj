class userController{
    async createUser(req,res){
        const {login, email, password} = req.body;
        console.log(login, email,password);
        res.json('ok');
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

module.export = new new userController();
