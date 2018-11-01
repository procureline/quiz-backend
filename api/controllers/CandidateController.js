module.exports = {
    //
    // ────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   C A N D I D A T E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────
    //
    async getCandidate(req,res){
        let request_data=req.query;
        await Candidate.find()
        .then(async (result)=>{
            
            return new Promise((resolve,reject)=>{
                let candidate=[]
                async.each(result,async (item,cb)=>{
                    let object= Object.assign({})
                    await CandidateResult.find({candidate_id:item.id})
                    .populate('skill_id')
                    .then((data)=>{
                        object.result=data;
                        object.candidate=item;
                        
                        candidate.push(object);
                        cb()
                    })
                },()=>{
                    
                    return ResponseService.json(200, res, "Candidate retrieve successful", candidate)
                    
                    
                })
                
                
                
                
            })
            
            
            
        })
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },

    async  getCandidateListing(req,res){
        let request_data=req.query;
        await Candidate.find()
        .then(async (result)=>{
            
            return ResponseService.json(200, res, "Candidate retrieve successful", result)

            
            
            
        })
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
    //
    // ────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D   C A N D I D A T E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────
    //
    async addCandidate(req,res){
        let request_data=req.body;
        await Candidate.count({candidate_email:request_data.candidate_email})
        .then( async (result)=>{
            sails.log('result',result)
            if(result>0 ){
                return ResponseService.json(400, res, "Candidate Email already exists ", result)
            }
            else{
                let obj={
                    candidate_name: request_data.candidate_name,
                    candidate_email: request_data.candidate_email,
                    phone: request_data.phone,
                    resume: request_data.resume,
                    address: request_data.address,
                    skill: request_data.skill.toString(),
                    experience: request_data.experience,
                    education: request_data.education,
                    refrence: request_data.refrence,
                }
                await Candidate.create(obj).fetch()
                .then(function (result){
                    return ResponseService.json(200, res, "Candidate created successful", result)
                })
            }
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
    //
    // ──────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: D E L E T E   C A N D I D A T E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────
    //
    async deleteCandidate(req,res){
        let request_data=req.body;
        await Candidate.destroy({id:request_data.id})
        .then((result)=>{
            return ResponseService.json(200, res, "Candidate deleted Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
    //
    // ────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   C A N D I D A T E   B Y   I D : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────
    //
    async getCandidateById(req,res){
        let request_data=req.query;
        await Candidate.findOne({id:request_data.id})
        .then((item)=>{
            let candidate=[]
            var val={}
            let skill=item.skill.split(",")
            sails.log(skill)
            val['candidate_email']=item.candidate_email
            val['address']=item.address
            val['candidate_name']=item.candidate_name
            val['createdAt']=item.createdAt
            val['education']=item.education
            val['experience']=item.experience
            val['id']=item.id
            val['phone']=item.phone
            val['refrence']=item.refrence
            val['resume']=item.resume
            val['skill']=skill
            candidate.push(val)
            return ResponseService.json(200, res, "Candidate retrieve successful", candidate)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
    
    async addResume(req,res){
        let request_data=req.body;
        let setfilename=`${Date.now()}.doc`
        let param=JSON.parse(request_data.param)
        uploadfile.uploadResume(req,setfilename).then(async (data)=>{
            sails.log(data)
            await Candidate.update({id:param.id}).set({resume:setfilename})
            .then((result)=>{
                return ResponseService.json(200, res, "Candidate Rresume uploaded successful", result)
            })
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
    async updateCandidate(req,res){
        let request_data=req.body;
        await Candidate.count({
            candidate_email:request_data.candidate_email,            
            id:{'!':request_data.id}
            
        })
        .then( async (result)=>{
            sails.log('result',result)
            if(result>0 ){
                return ResponseService.json(400, res, "Candidate Email already exists ", result)
            }
            else{
                let obj={
                    candidate_name: request_data.candidate_name,
                    candidate_email: request_data.candidate_email,
                    phone: request_data.phone,
                    address: request_data.address,
                    skill: request_data.skill.toString(),
                    experience: request_data.experience,
                    education: request_data.education,
                    refrence: request_data.refrence,
                }
                await Candidate.update({id:request_data.id}).set(obj)
                .then(function (result){
                    return ResponseService.json(200, res, "Candidate updated successful", result)
                })
            }
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
    
};
