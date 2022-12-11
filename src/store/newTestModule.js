import {newGuid} from "@/common/GuidLogic";
import {API_URL, TESTS_API_URL} from "@/common/API";
import axios from "axios";

export const newTestModule = {
    state: () => ({
        newTest: {
            id: null,
            creator_id: null,
            by_invitation: false,
            title: null,
            description: null,
            type: null,
            questions: [
                {
                    id: null,
                    number: 0,
                    question_text: "",
                    answers: [
                        {
                            "number": 0,
                            "title": ""
                        },
                    ],
                },
            ]
        },
        count: 1,
        answersCount: 0,
    }),

    getters:{
        NEWTEST: state => {
            return state.newTest
        },
    },

    mutations:{
        setTitle(state, title){
            state.newTest.title = title
        },
        setDescription(state, description){
            state.newTest.description = description
        },
        setByInvation(state, bool){
            state.newTest.by_invitation = bool
        },
        setNewQuestions(state, questions){
            state.newTest.questions = questions
        },

        setQuestionTitle(state, {index, title}) {
            state.newTest.questions[index].question_text = title
        },
        setAnswerTitle(state, {testIndex , index, title}) {
            state.newTest.questions[testIndex].answers[index].title = title
        },

        addNewQuestion(state, index){
            //TODO фигово работает если шалить
            //alert(number)
            state.count++;
            state.newTest.questions.splice(index+1, 0, {
                id: null,
                number: state.count -1,
                question_text: "",
                answers: [
                    {
                        "number": 0,
                        "title": ""
                    },
                ],
            })
            this.commit("setNewQuestions", state.newTest.questions)
            //state.newTest.questions.push(
            //    {
            //        id: null,
            //        number: state.count -1,
            //        question_text: "",
            //        answers: [
            //            {
            //                "number": 0,
            //                "title": ""
            //            },
            //        ],
            //    })
        },
        deleteQuestion(state, index){
            //TODO
            //state.newTest.questions = state.newTest.questions.filter(function (el){
            //    return el.number !== number
            //})
            state.newTest.questions.splice(index, 1)
            this.commit("setNewQuestions", state.newTest.questions)

            state.count--;
            //for (let i =0; i < state.count; i++ ){
            //    state.newTest.questions[i].number = i
            //    //this.commit('setNumber', {
            //    //    lastNumber: state.newTest.questions[i].number,
            //    //    newNumber: i
            //    //})
            //}
        },

        addNewAnswer(state, testIndex){
            //state.newTest.questions[testIndex].answers.splice(index+1, 0, {
            //            "number": null,
            //            "title": ""
            //        })

            state.newTest.questions[testIndex].answers.push(
                {
                    "number": state.newTest.questions[testIndex].answers.length,
                    "title": ""
                })

        },
        deleteAnswer(state, testIndex){
            state.newTest.questions[testIndex].answers.pop()
        },
    },

    actions: {
        addNewTest: async (context) => {
            let addTest = context.state.newTest

            addTest.id = newGuid()
            addTest.creator_id = sessionStorage.getItem("UserID")

            let count = 0;
            for (let i = 0; i < addTest.questions.length; i++){
                addTest.questions[i].id = newGuid()
                addTest.questions[i].number = count
                count++;
            }

            await axios.post(API_URL + TESTS_API_URL + "/", context.state.newTest);
        },
    }
}