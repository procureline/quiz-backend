module.exports = {
  tableName: 'question',
   attributes: {
     
    question:{type:'string',required:true},
    code:{type:'string'},
    answer:{type:'json',required:true},
    skill:{model:'Skill'},
    image:{type:'string'},
    level:{type:'string',enum: ['easy', 'medium', 'difficulty']
  },
    correct_answer:{type:'number',required:true},
    status:{type:'number',required:true},
    createdAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
   updatedAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
  },
};
