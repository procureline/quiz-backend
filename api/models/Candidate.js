module.exports = {
  tableName: 'candidate_master',
   attributes: {
     
    id:{type:'number', autoIncrement: true,columnName:'candidateid'  },   
    candidate_name:{type:'string',required:true},
    candidate_email:{type:'string',required:true},
    createdAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
    updatedAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
    
  },
};
