module.exports = {
  tableName: 'skill',
   attributes: {
     
     title:{type:'string',required:true},
     createdAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
     updatedAt:{type:'ref', columnType:'datetime', autoCreatedAt: true,},
   
    
  },
};
