 
module.exports.routes = {
  '/': {
    view: 'pages/homepage',
  },
  '/login': {
    view: 'pages/homepage',
  },
  '/dashboard': {
    view: 'pages/homepage',
  },
  '/result': {
    view: 'pages/homepage',
  },
  '/question-listing': {
    view: 'pages/homepage',
  },
  '/quiz': {
    view: 'pages/homepage',
  },
  '/candidate': {
    view: 'pages/homepage',
  },
  '/candidate/listing': {
    view: 'pages/homepage',
  },

 
  //
  // ──────────────────────────────────────────────────────────── I ──────────
  //   :::::: A U T H   R O U T E : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────
  //
  'POST /api/login': 'AdminController.login', 
  'GET /api/get-category': 'SkillController.getSkill', 
  'POST /api/add-question': 'QuestionController.addQuestion', 
  'POST /api/update-question': 'QuestionController.updateQuestion', 
  'GET /api/get-question': 'QuestionController.getQuestion', 
  'GET /api/get-quiz-question': 'QuestionController.getQuizQuestion', 

  'GET /api/get-question-by-id': 'QuestionController.getQuestionById', 
  'POST /api/delete-question': 'QuestionController.deleteQuestion', 

  'POST /api/verify-exam-code': 'CandidateResultController.verifyExamCode', 
  'POST /api/submit-exam': 'ExamController.addExam', 

  'GET /api/get-candidate': 'CandidateController.getCandidate', 
  'GET /api/get-candidate-result': 'ExamController.getCandidateResult', 
  'GET /api/get-candidate-score': 'ExamController.getCandidateScore', 

  'POST /api/assign-exam-candidate': 'ExamController.assignExamCandidate', 
  'POST /api/deactive-question': 'QuestionController.deactiveQuestion', 
  'POST /api/add-candidate': 'Candidate.addCandidate', 
  'POST /api/delete-candidate': 'Candidate.deleteCandidate', 
  'GET /api/get-candidate-byid': 'Candidate.getCandidateById', 
  'POST /api/update-candidate': 'Candidate.updateCandidate', 

  'POST /api/add-candidate-resume': 'Candidate.addResume', 
  'POST /api/update-question-image': 'QuestionController.updateQuestionImage', 
  
}