module.exports = {  
    moveupload:  (req,setfilename) =>{
        return new Promise(function(resolve,reject){
            req.file('question_file').upload({
                saveAs:setfilename,
                dirname: require('path').resolve(sails.config.appPath, 'assets/images/'),
                maxBytes: 10000000
            }, async function whenDone(err, uploadedFiles) {
                if (err) {
                    reject(err);
                }
                if (uploadedFiles.length === 0){
                    reject('No file was uploaded')
                }else{
                    resolve(setfilename);
                }
            });
        })
    },
    uploadResume:  (req,setfilename) =>{
        return new Promise(function(resolve,reject){
            req.file('resume').upload({
                saveAs:setfilename,
                dirname: require('path').resolve(sails.config.appPath, 'assets/cv/'),
                maxBytes: 10000000
            }, async function whenDone(err, uploadedFiles) {
                if (err) {
                    reject(err);
                }
                if (uploadedFiles.length === 0){
                    reject('No file was uploaded')
                }else{
                    resolve(setfilename);
                }
            });
        })
    },
}