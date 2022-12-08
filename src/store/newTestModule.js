export const newTestModule = {
    state: () => ({
        newTest: {
            id: null,
            creator_id: null,
            by_invitation: null,
            title: null,
            description: null,
            type: null,
            questions: [
                {
                    id: null,
                    number: 0,
                    question_text: ""
                },
            ]
        },
        count: 0,
    }),

    getters:{
        NEWTEST: state => {
            return state.newTest
        },
    },

    mutations:{
        addNewQuestion(state){
            state.count++;
            state.newTest.questions.add(
            {
                id: null,
                number: state.count,
                question_text: ""
            })
        },
        deleteQuestion(state, number){
            //TODO
            state.newTest.questions.filter(function (el){
                return el.number !== number
            })
        },

        //addNewAnswer(state){
//
        //},
        //deleteAnswer(state, id){
//
        //},
    },

    actions: {
        addNewTest: async (context) => {
            //TODO добавление теста
        },
    }
}