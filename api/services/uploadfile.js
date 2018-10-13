module.exports = {  
    moveupload: function (req,setfilename) {

    
        return new Promise(function(resolve,reject){
            req.file('question_file').upload({
                saveAs:setfilename,
                dirname: require('path').resolve(sails.config.appPath, 'assets/images/'),
                maxBytes: 10000000
            }, async function whenDone(err, uploadedFiles) {

                console.log('err',err)
                console.log('uploadedFiles',uploadedFiles)

                 
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