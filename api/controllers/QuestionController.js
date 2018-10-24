module.exports = {
    //
    // ────────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D  Q U E S T I O N : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────
    //
    async addQuestion(req,res){
        let param=req.body;
        let obj={
            question:param.question,
            answer:param.answer,
            code:param.code,
            skill: param.skill,
            correct_answer:param.correct_answer,
            level:param.level
        }
        await Question.create(obj)
        .then( (result)=>{
            return ResponseService.json(200, res, "Question created Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T  Q U E S T I O N : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────
    //
    async getQuestion(req,res){
        let request_data=req.query;
        let obj={
            skill: request_data.skill,
        }
        await Question.find(obj)
        .then( (result)=>{
            let ques=[]
            async.each(result,(item,cb)=>{
                let object=Object.assign({});
                object.answer=item.answer;
                object.code=item.code;
                object.createdAt=item.createdAt;
                object.id=item.id;   
                object.image=(item.image!='')?`${sails.config.custom.imageUrl}/images/${item.image}`:null;
                object.question=item.question;
                object.skill=item.skill;
                object.updatedAt=item.updatedAt;
                object.correct_answer=item.correct_answer;
                object.status=item.status;
                ques.push(object);
                cb();
            },()=>{
                return ResponseService.json(200, res, "Question retrieve successful",ques);
            })
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   Q U I Z   Q U E S T I O N : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────
    //
    async getQuizQuestion(req,res){
        let request_data=req.query;
        let level=[
            {
                level:'easy',
                limtcall:request_data.easy
            },
            {
                level:'medium',
                limtcall:request_data.medium
            },
            {
                level:'difficulty',
                limtcall:request_data.difficulty
            }
        ]
        console.log('tag', level,'level');
        let question=  new Promise((resolve,reject)=>{
            let ques=[] 
            async.each(level , async (item,cb)=>{
                let val={};
                let obj={
                    where:{ skill: request_data.skill,level:item.level,status:1},
                    select:['answer','status','code','createdAt','id','image','question','skill','updatedAt']
                }
                await Question.find(obj)
                .limit(item.limtcall)
                .then( (result)=>{
                    val[item.level]=result;
                    ques.push(val);
                    cb();
                })
            },()=>{
                resolve(ques);
            })
        })
        question.then((data)=>{
            return ResponseService.json(200, res, "Question retrieve successful",data);
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ──────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   Q U E S T I O N   B Y   I D : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────
    //
    async getQuestionById(req,res){
        let request_data=req.query;
        let obj={
            id: request_data.id,
        }
        await Question.findOne(obj)
        .then( (result)=>{
            sails.log(result)
            result.image=(result.image!='')?`${sails.config.custom.imageUrl}/images/${result.image}`:''
            return ResponseService.json(200, res, "Question retrieve successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ──────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: U P D A T E Q U E S T I O N : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────
    //
    async updateQuestion(req,res){
        let param=req.body;
        let obj={
            question:param.question,
            answer:param.answer,
            code:param.code,
            skill: param.skill,
            correct_answer:param.correct_answer,
            level:param.level
        }
        await  Question.update({   
            id: param.id,
        }).set(obj)
        .then( (result)=>{
            return ResponseService.json(200, res, "update Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ──────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: D E L E T E  Q U E S T I O N : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────
    //
    async deleteQuestion(req,res){
        let request_data=req.body;
        await Question.destroy({   
            id: request_data.id,
        }) 
        .then( (result)=>{
            return ResponseService.json(200, res, "Question deleted Successful", result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    //
    // ────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: D E A C T I V E   Q U E S T I O N : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────
    //
    async deactiveQuestion(req,res){
        let request_data=req.body;
        let obj={
            status:request_data.status,
        }
        const action =(request_data.status==1)?'active':'deactive';
        await  Question.update({   
            id: request_data.id,
        }).set(obj)
        .then( (result)=>{
            return ResponseService.json(200, res, `Question ${action} successful`, result)
        })
        .catch((err)=>{
            return ResponseService.json(500, res, "Server Error", err);
        });
    },
    async updateQuestionImage(req,res){
        let request_data=req.body;
        let setfilename=`${Date.now()}.jpg`
        let param=JSON.parse(request_data.param)
        sails.log(request_data)
        
        uploadfile.moveupload(req,setfilename).then(async (data)=>{
            sails.log(data)
            await Question.update({id:param.id}).set({image:setfilename})
            .then((result)=>{
                return ResponseService.json(200, res, "Question image uploaded successful", result)
            })
        }) 
        .catch((err)=>{
            return ResponseService.json(500, res, err)
        });
    },
};
