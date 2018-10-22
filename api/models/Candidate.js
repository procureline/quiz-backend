module.exports = {
  tableName: 'candidate',
   attributes: {
     
    id:{type:'number', autoIncrement: true,  },   
    candidate_name:{type:'string',required:true},
    candidate_email:{type:'string',required:true},
    createdAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
    updatedAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
    phone:{type:'number',required:true},
    resume:{type:'string'},
    address:{type:'string',required:true},
    skill:{type:'string',required:true ,columnType:'Array'},
    experience:{type:'number',required:true},
    education:{type:'string',required:true},
    refrence:{type:'string',required:true},
 
    
  },
};
