var md5 = require('md5');
module.exports = {
    //
    // ──────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: ADMIN   L O G I N : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────
    //
    async login(req,res){
        let request_data=req.body;
        if(!request_data.email || !request_data.password){
            return ResponseService.json(400 , res, "Please enter email and password")
        }
        await Admin.findOne({sa_email:request_data.email,sa_password:md5(request_data.password)})
        .then(function (user){
            if(!user) {
                return ResponseService.json(400  , res, "Invalid email or password")
            }
            
            var responseData = {
                user: user,
                token: JwtService.issue({email:user.sa_email,id:user.id,username:user.sa_name,type:'admin'})
            }
            return ResponseService.json(200, res, "Login Successful", responseData)
        })
        .catch(function(err){
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
   
     
};
