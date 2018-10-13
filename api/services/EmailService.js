module.exports = {  
    sendPasswordRecoveryEmail: function (obj) {
        sails.hooks.email.send(
            "forgetPassword", 
            {
                Name: `${obj.user[0].first_name} ${obj.user[0].last_name}`,
                Otp: obj.otp
            },
            {to: 'subhash.viswakarma@procuretechstaff.in',subject: "Procureline Forgot Password - Email OTP"},
            function(err,res) {
            }
        )
    },
     sendAddTimeSheetEmail: async function (obj) {
        var result= await ProjectTimesheetMast.find({timesheet_period_id:obj.id})    
        .populate('employee_id')
        .populate('project_id')
    
        sails.log(obj)
        sails.hooks.email.send(
            "addTimeSheet", 
            {
                response: result,
            },
            {to: 'subhash.viswakarma@procuretechstaff.in',subject: "Procureline Timesheet"},
            function(err) {
            }
        )
    },
    sendPasswordUpdateEmail: function (obj) {
        sails.hooks.email.send(
            "passwordUpdateEmail", 
            {
                Name: obj.username,
            },
            {to: 'subhash.viswakarma@procuretechstaff.in',subject: "Procureline Password Changed"},
            function(err) {
            }
        )
    },
};