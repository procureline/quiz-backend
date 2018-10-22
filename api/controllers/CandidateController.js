module.exports = {
    //
    // ────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   C A N D I D A T E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────
    //
    async getCandidate(req,res){
        let request_data=req.query;
        await Candidate.find()
        .then((result)=>{
            return ResponseService.json(200, res, "Fetch Successful", result)
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
                return ResponseService.json(400, res, "email already exists ", result)
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
                console.log(obj);
                await Candidate.create(obj).fetch()
                .then(function (result){
                    return ResponseService.json(200, res, "Fetch Successful", result)
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
            return ResponseService.json(200, res, "delete Successful", result)
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
            console.log('tag', item)
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
            return ResponseService.json(200, res, "Fetch Successful", candidate)
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
                return ResponseService.json(200, res, "Fetch Successful", result)
            })
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    }
};
