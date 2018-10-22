module.exports = {
    //
    // ────────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D  Skill: :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────
    //
    async addSkill(req,res){
        let request_data=req.body;
        let obj={
            title:request_data.title,
        }
        await Skill.create(obj)
        .then( (result)=>{
            return ResponseService.json(200, res, "Record created successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T  Skill : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────
    //
    async getSkill(req,res){
        let request_data=req.body;
        await Skill.find({})
        .then( (result)=>{
            return result;
        })
        .then( (result)=>{
            let skill=[]
            async.each(result,async (item,cb)=>{
                let object= Object.assign({});
                object.title=item.title;
                object.id=item.id;
                object.easy=await Question.count({skill:item.id,level:'easy',status:1});
                object.medium=await Question.count({skill:item.id,level:'medium',status:1});
                object.difficulty=await Question.count({skill:item.id,level:'difficulty',status:1});
                object.easy_selected=0;
                object.medium_selected=0;
                object.difficulty_selected=0;
                skill.push(object)   ;          
                cb()
            },()=>{
                return ResponseService.json(200, res, "Record fetch Successful", skill)
            })
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ──────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: U P D A T E  Skill: :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────
    //
    async updateSkill(req,res){
        let request_data=req.body;
        let obj={
            title: request_data.title,
        }
        await Skill.update({   
            id: request_data.id,
        }).set(obj).fetch()
        .then( (result)=>{
            return ResponseService.json(200, res, "Record fetch Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ──────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: D E L E T E  Skill : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────
    //
    async deleteSkill(req,res){
        let request_data=req.body;
        await Skill.destroy({   
            id: request_data.id,
        }) 
        .then( (result)=>{
            return ResponseService.json(200, res, "Record fetch Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
};
