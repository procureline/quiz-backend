module.exports = {
  tableName: 'vms_superadmin_master',
  primaryKey:'id',

  attributes: {
    id:{type:'number', autoIncrement: true,columnName:'sa_id'  },   
   sa_name:{type:'string',required:true},
    sa_email:{type:'string',required:true},
    sa_password:{type:'string',required:true},
    file:{type:'string',required:true},
    status:{type:'string'},
    forgot_password_otp:{type:'string'},
     is_delete:{type:'string',},
  },
};
