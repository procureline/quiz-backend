 
module.exports = {
    //
    // ──────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: V E R I F Y   E X A M   C O D E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────
    //

    

    async verifyExamCode(req,res){
        let request_data=req.body;
        await CandidateResult.find(
            {
                where:  {examination_code: request_data.examination_code ,exam_over:0},
            }
            ).populate('skill_id').populate('candidate_id')
            .then(function (result){
                if(result.length<1){
                    return ResponseService.json(401, res, "Not match Or Exam Expired", result)
                }
                let responseData = {
                    data:result,
                    token: JwtService.issue({id:result[0].candidate_id.id,                        
                        candidate_email:result[0].candidate_id.candidate_email,
                        candidatename:result[0].candidate_id.candidatename, 
                        type:'candidate'                       
                    })
                }
                return ResponseService.json(200, res, "Examination code match successful", responseData)
            })
            .catch(function(err){
                return ResponseService.json(500, res, "Server Error", err);
            });
        },
    };
    