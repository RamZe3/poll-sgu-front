import {newGuid, shortNewGuid} from "@/common/GuidLogic";
import {API_URL, TESTS_API_URL} from "@/common/API";
import axios from "axios";
import moment from "moment";

export const newTestModule = {
    state: () => ({
        newTest: {
            id: null,
            creator_id: null,
            by_invitation: false,
            title: null,
            description: null,

            //type: Psiho, Default
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
        ballings: [
            {
                id: null,
                number: 0,
                minValue: null,
                maxValue: null,
                answer: '',
            }
        ],
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
        setType(state, type){
            state.count = 1
            state.answersCount = 0
            state.newTest = {
                id: null,
                creator_id: null,
                by_invitation: false,
                title: null,
                description: null,
                type: type,
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
                ],
            }
        },

        //for psyho
        setAnswerValue(state, {testIndex , index, value}) {
            state.newTest.questions[testIndex].answers[index].value = value
        },

        addNewQuestion(state, index){
            //TODO фигово работает если шалить
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
        },

        deleteQuestion(state, index){
            //TODO логика с порядком
            state.newTest.questions.splice(index, 1)
            this.commit("setNewQuestions", state.newTest.questions)

            state.count--;
        },

        addNewAnswer(state, testIndex){
            state.newTest.questions[testIndex].answers.push(
                {
                    "number": state.newTest.questions[testIndex].answers.length,
                    "title": ""
                })

        },
        deleteAnswer(state, testIndex){
            state.newTest.questions[testIndex].answers.pop()
        },


        //for psyho
        addBallingMinValue(state, {index ,min}){
            state.ballings[index].minValue = min
        },
        addBallingMaxValue(state, {index ,max}){
            state.ballings[index].maxValue = max
        },
        addBallingAnswer(state, {index ,answer}){
            state.ballings[index].answer = answer
        },

        addBalling(state){
            state.ballings.push(
                {
                    id: null,
                    number: state.ballings.length,
                    minValue: null,
                    maxValue: null,
                    answer: '',
                })
        },

        deleteBalling(state){
            state.ballings.pop()
        },


    },

    actions: {
        addNewTest: async (context) => {
            let addTest = context.state.newTest

            addTest.id = newGuid()
            addTest.creator_id = sessionStorage.getItem("UserID")
            addTest.date_of_passage = moment().format("YYYY-MM-DD HH:mm")
            if (addTest.by_invitation){
                addTest.invitation_key = shortNewGuid()
            }

            let count = 0;
            for (let i = 0; i < addTest.questions.length; i++){
                addTest.questions[i].id = newGuid()
                addTest.questions[i].number = count
                count++;
            }

            if (addTest.type === "Psiho"){
                addTest.ballings = context.state.ballings
            }

            await axios.post(API_URL + TESTS_API_URL + "/", context.state.newTest);
        },
    }
}