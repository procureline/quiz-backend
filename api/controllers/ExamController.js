module.exports = {
    //
    // ────────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D  EXAM: :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────
    //
    async addExam(req,res){
        let request_data=req.body;
        let request_header=req.query;
        sails.log('request_data',request_data)
        return new Promise((resolve,reject)=>{
            async.each(request_data,async (item,cb)=>{
                sails.log(item.id)
                let obj={
                    examination_code: item.examination_code,
                    question: item.id,
                    submitted_answer:item.submitted_answer ,
                    skill_id:item.skill
                }
                await Exam.create(obj)
                .then((result)=>{
                    cb();
                })
            },async ()=>{
                resolve('done')
            })
        }).then(async (result)=>{
            return new Promise(async (resolve,reject)=>{
                sails.log(request_data[0])
                await Exam.find({examination_code:request_data[0].examination_code,skill_id:request_data[0].skill})  .populate('question')
                .then((data)=>{
                    let correctAnswer = 0;
                    data.forEach((element)=>{
                        sails.log('element.submitted_answer,element.question.correct_answer')
                        sails.log(element.submitted_answer,element.question.correct_answer)
                        if (element.submitted_answer === element.question.correct_answer) {
                            correctAnswer  ++;
                            sails.log(element.submitted_answer === element.question.correct_answer)
                        }  
                    })
                    resolve(correctAnswer)
                })
            }).then(async (correctAnswer)=>{
                    
                    await  CandidateResult.findOne({
                        examination_code:request_data[0].examination_code,
                        skill_id:request_data[0].skill
                    }).then(async (candidateresult)=>{
                        await  CandidateResult.update({
                            examination_code:request_data[0].examination_code,
                            skill_id:request_data[0].skill
                        })
                        .set({
                            exam_finished:request_header.exam_finished,
                            exam_over:1,
                            score:correctAnswer,
                            percentage:(((100/candidateresult.total_question)*correctAnswer).toFixed(2))
                        }).fetch()
                        .then((result)=>{
                            return ResponseService.json(200, res, "Exam added successful",result);
                        })
                    })
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
            .then((result)=>{
                if(!result || result.length<1 ){
                    return ResponseService.json(401, res, "No exam assigned to candidate", result);
                }
                return ResponseService.json(200, res, "Candidate Result retrieve successful",result);
            })
            .catch((err)=>{
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
            .then(async (result)=>{
                await CandidateResult.find({examination_code:request_data.examination_code}) 
                .then((examresult)=>{
                    let obj={
                        skillscore:result,
                        exam:examresult
                    }
                    return ResponseService.json(200, res, "Candidate Score retrieve successful",obj);
                })
            })
            .catch((err)=>{
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
            async.each(request_data.category, async (item,cb)=>{
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
                    .then((result)=>{
                        cb()
                    })
                }else{
                    cb()
                }
            },()=>{
                return ResponseService.json(200, res, "Exam assign successful",{examination_code:examination_code});
            })
            //     .catch((err){
            //         return ResponseService.json(500, res, "err", err);
            //     })
        }
    };
