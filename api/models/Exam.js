module.exports = {
  tableName: 'exam',
   attributes: {
     
    examination_code:{type:'string',required:true},
    question:{model:'Question',required:true},
    submitted_answer:{type:'number',required:true},
    skill_id:{model:'Skill',required:true},
    createdAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
    updatedAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
  
  },
};
