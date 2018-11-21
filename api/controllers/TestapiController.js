module.exports = {
  
    async getTestapi(req,res){
        let request_data=req.query;
        await Testapi.find()
        .then(async (result)=>{
            
            return ResponseService.json(200, res, "Record retrieve successful", result);            
            
        })
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
 
    async addTestapi(req,res){
        let request_data=req.body;
        await Testapi.count({email:request_data.email})
        .then( async (result)=>{
             if(result>0 ){
                return ResponseService.json(400, res, " Email already exists ", result)
            }
            else{
                let obj={
                    firstname:request_data.firstname,
                    lastname:request_data.lastname,
                    email:request_data.email,
                    address:request_data.address,
                }
                await Testapi.create(obj).fetch()
                .then(function (result){
                    return ResponseService.json(200, res, "Record created successful", result)
                })
            }
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
 
    async deleteTestapi(req,res){
        let request_data=req.query;
        await Testapi.destroy({id:request_data.id})
        .then((result)=>{
            return ResponseService.json(200, res, "Record deleted Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
  
    async updateTestapi(req,res){
        let request_data=req.body;
        let id=req.query.id;
        await Testapi.count({email:request_data.email,
            id:{'!':id}

        })
        .then( async (result)=>{
             if(result<1 ){
                return ResponseService.json(400, res, "Record Email already exists ", result)
            }
            else{
                let obj={
                    firstname:request_data.firstname,
                    lastname:request_data.lastname,
                    email:request_data.email,
                    address:request_data.address,
                }
                await Testapi.update({id:request_data.id})
                .set(obj)
             //   .fetch()
                .then(function (result){
                    return ResponseService.json(200, res, "Record updated successful", result)
                })
            }
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
};
