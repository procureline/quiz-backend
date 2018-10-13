

module.exports = {
 
    //
    // ────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: G E T   C A N D I D A T E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────
    //

    

    async getCandidate(req,res){
        let request_data=req.query;
        
        await Candidate.find()
        .then(function (result){
            return ResponseService.json(200, res, "Fetch Successful", result)
        })
        .catch(function(err){
            return ResponseService.json(500, res, err)
        });
    },
    async addCandidate(req,res){
        let request_data=req.body;


        
        await Candidate.create(request_data)
        .then(function (result){
            return ResponseService.json(200, res, "Fetch Successful", result)
        })
        .catch(function(err){
            return ResponseService.json(500, res, err)
        });
    },


};

