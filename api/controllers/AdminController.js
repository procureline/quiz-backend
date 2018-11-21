let md5 = require('md5');
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
        .then((user)=>{
            if(!user) {
                return ResponseService.json(400  , res, "Invalid email or password")
            }
            
            let responseData = {
                user: user,
                token: JwtService.issue({email:user.sa_email,id:user.id,username:user.sa_name,type:'admin'})
            }
            return ResponseService.json(200, res, "Admin Login Successful", responseData)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
   
    async updatePassword (req,res){
        
        let request_data=req.body;
        let loggedUserId=15;

        if(!request_data.password || !request_data.cpassword){
            return ResponseService.json(403 , res, "Please enter all required fields")
        }

        if(request_data.password != request_data.cpassword){
            return ResponseService.json(403 , res, "Password and Confirm password not match")
        }
        await Admin.update({id:loggedUserId})
        .set({password:md5(request_data.password)}).fetch()
        .then(function(result){
            sails.log(result)
            let obj={
                to:result[0].sa_email,
           }
           
    return ResponseService.json(200, res, "Password updated", result);


        })
        .catch(function(err){
            sails.log.debug(`Some error occured request_data.${err}`);
            return ResponseService.json(500, res, err)
        })  
    }
};
