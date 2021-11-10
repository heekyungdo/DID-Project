module.exports = {
    getSurveys: {
        query: "select * from t_survey",
    },
    getSurveyById: {
        query: `select * from t_survey where survey_id = ?`,
    },
    getSurveyByIds: {
        query: `select * from t_survey where survey_id in (?)`,
    },
    getSurveyByCompany: {
        query: "SELECT t1.survey_id, t1.survey_count, t1.survey_start_date ,t1.survey_end_date ,t1.survey_title ,t1.survey_description ,(t1.survey_request_count/t1.survey_complete_count)*100 as total_complte ,t1.survey_company_account FROM t_survey t1  where t1.survey_company_account = ?",
    },
    getCompletePeople: {
        query: "select * from t_complete",
    },
    getQuestions: {
        query: "select * from t_question where survey_id = ?",
    },
    insertAnswer: {
        query: "insert into t_answer set ?",
    },
    discountDay: {
        query: "SELECT TIMESTAMPDIFF(QUARTER, '2017-03-01', '2018-03-28')",
    },
};
