module.exports = {
    //
    // ────────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D  EXAM: :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────
    //
    async addExam(req,res){
        let request_data=req.body;
        async.each(request_data,async function(item,cb){
            sails.log(item.id)
            let obj={
                examination_code: item.examination_code,
                question: item.id,
                submitted_answer:item.submitted_answer ,
                skill_id:item.skill
            }
            await Exam.create(obj)
            .then(function (result){
                cb();
            })
        },async function(){
          await  CandidateResult.update({examination_code:request_data.examination_code,skill_id:request_data[0].skill})
            .set({exam_over:1})
            .then(function(result){
                return ResponseService.json(200, res, "Record updated",result);
            })
            .catch(function(err){
                return ResponseService.json(500, res, "Server Error", err);
            })
        })
    },
    //
    // ──────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   C A N D I D A T E   R E S U L T : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────
    //
    async getCandidateResult(req,res){
        let request_data=req.query; 
       await CandidateResult.find({candidate_id: request_data.id}).populate('skill_id')
        .then(function(result){
            if(!result || result.length<1 ){
                return ResponseService.json(401, res, "No data found", result);
            }
            return ResponseService.json(200, res, "Record fetch Successful",result);
        })
        .catch(function(err){
            return ResponseService.json(500, res, "Server Error", err);
        })
    },
    //
    // ────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   S C O R E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────
    //
    async getCandidateScore(req,res){
        let request_data=req.query; 
       await Exam.find({skill_id:request_data.skill_id,examination_code:request_data.examination_code})
        .populate('question')
        .populate('skill_id')
        .then(function(result){
            return ResponseService.json(200, res, "Record fetch Successful",result);
        })
        .catch(function(err){
            return ResponseService.json(500, res, "err", err);
        })
    },
    //
    // ──────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: A S S I G N   E X A M   T O   C A N D I D A T E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────────
    //
    async assignExamCandidate(req,res){
        let request_data=req.body; 
        let date= new Date();
        let examination_code =   `PTS-${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}-${date.getHours()}${date.getMinutes()}${ date.getSeconds()}`
        let total_question=0
        async.each(request_data.category, async function(item,cb){
            if(item.checked===true){
                let level={
                    easy_selected:item.easy_selected,
                    medium_selected:item.medium_selected,
                    difficulty_selected:item.difficulty_selected
                }  
                total_question =item.easy_selected+item.medium_selected+item.difficulty_selected
                 let obj={
                    examination_code:examination_code,
                    skill_id:item.id,
                    candidate_id:request_data.candidate_id,
                    level:level,
                    total_question:total_question
                }  
                console.info(obj);
             await   CandidateResult.create(obj )
                .then(function(result){
                    cb()
                })
            }else{
                cb()
            }
        },function(){
            return ResponseService.json(200, res, "Record added successful",{examination_code:examination_code});
        })
        //     .catch(function(err){
        //         return ResponseService.json(500, res, "err", err);
        //     })
    }
};
