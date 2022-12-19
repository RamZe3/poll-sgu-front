import axios from "axios";
import {API_URL, RESULTS_API_URL, TESTS_API_URL, USERS_API_URL} from "@/common/API";
import {newGuid} from "@/common/GuidLogic";

export const testModule = {
    state: () => ({
        tests: [],

        activeTest: null,
        questionsCount: null,
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
        QUESTIONS_COUNT: state =>{
            return state.questionsCount
        }
    },

    mutations:{
        setTests(state, tests){
            state.tests = tests
        },
        setActiveTest(state, activeTest){
            state.activeTest = activeTest
            state.currentQuestionAT = 0
            state.questionsCount = activeTest.questions.length
        },
        setQuestion(state, questionN){
            state.currentQuestionAT = questionN
        },
        setQuectionsCount(state, count){
            state.questionsCount = count
        },

        //for currentQuestion
        setAnswer(state, answer){
            state.activeTest.questions[state.currentQuestionAT].answer = [answer]
        },
    },

    actions: {
        getTests : async (context) => {
            let getTests = []

            const userResponse = await axios.get(API_URL + USERS_API_URL + '/?id=' + sessionStorage.getItem("UserID"));
            const testsResponse = await axios.get(API_URL + TESTS_API_URL);

            const userTestsId = userResponse.data[0].tests_by_invite
            const allTest = testsResponse.data

            allTest.forEach(function (item){
                if (!item.by_invitation || userTestsId.includes(item.id)){
                    getTests.push(item)
                }
                else if (item.creator_id === sessionStorage.getItem("UserID")){
                    getTests.push(item)
                }
            })

            context.commit("setTests", getTests)
        },

        addTestByInviting: async (context, code) => {
            const response = await axios.get(API_URL + TESTS_API_URL + "/?invitation_key=" + code);
            //console.log(response.data[0])
            //console.log(code)
            if (response.data[0] !== undefined){

                let user = (await axios.get(API_URL + USERS_API_URL + '/?id=' + sessionStorage.getItem("UserID"))).data[0];
                user.tests_by_invite.push(response.data[0].id)

                await axios.put(API_URL + USERS_API_URL + "/" + user.id, user);
                await context.dispatch("getTests")
            }
        },

        setActiveTestById : async (context, id) => {
            const cTest = context.state.tests.find(el => el.id === id)

            context.commit("setActiveTest", cTest)
        },

        addTestToResult: async (context) => {
            let result = context.state.activeTest
            result.test_id = result.id
            result.id = newGuid()
            result.user_id = sessionStorage.getItem("UserID")

            await axios.post(API_URL + RESULTS_API_URL + "/", result);
        }
    }
}