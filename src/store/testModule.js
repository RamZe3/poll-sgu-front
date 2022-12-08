import axios from "axios";
import {API_URL, TESTS_API_URL, USER_API_URL} from "@/common/API";

export const testModule = {
    state: () => ({
        tests: [],

        activeTest: null,
        currentQuestionAT: -1,

    }),

    getters:{
        TESTS: state => {
            return state.tests
        },

        ACTIVETEST: state => {
            return state.activeTest
        },
        CURRENT_QUESTION: state => {
            return state.activeTest
        },
    },

    mutations:{
        setTests(state, tests){
            state.tests = tests
        },
        setActiveTest(state, activeTest){
            state.activeTest = activeTest
            state.currentQuestionAT = 0
        },
        setQuestion(state, questionN){
            state.currentQuestionAT = questionN
        },
    },

    actions: {
        getTests : async (context) => {
            let getTests = []
            const response1 = await axios.get(API_URL + USER_API_URL + '/?id=' + sessionStorage.getItem("UserID"));
            const response2 = await axios.get(API_URL + TESTS_API_URL);

            const userTestsId = response1.data[0].test_by_invite
            const allTest = response2.data

            allTest.forEach(function (item){
                if (!item.by_invitation || userTestsId.contains(item.id)){
                    getTests.add(item)
                }
            })

            context.commit("setTests", getTests)
        },

        setActiveTestById : async (context, id) => {
            //TODO мб неправильно
            const cTest = context.state.tests.find(el => el.id === id)

            context.commit("setActiveTest", cTest)
        },

        addTestToResult: async (context) => {
            //TODO добавление результата
        }
    }
}