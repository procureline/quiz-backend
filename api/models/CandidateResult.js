module.exports = {
  tableName: 'candidate_result',
   attributes: {
     
    candidate_id:{model:'Candidate'},
    skill_id:{model:'Skill',required:true},
    score:{type:'number',},
    total_question:{type:'number',required:true},
    examination_code:{type:'string',required:true},
    level:{type:'json',required:true},
    exam_over:{type:'number'},
    percentage:{type:'string'},
    exam_finished:{type:'string',isIn: ['time_over', 'manually', 'tab_change']},
    createdAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
    updatedAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
   
  },
};
