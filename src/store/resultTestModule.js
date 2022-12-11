import axios from "axios";
import {API_URL, RESULTS_API_URL} from "@/common/API";

export const resultTestModule = {
    state: () => ({
        results: [],

        activeResult: null,
    }),

    getters:{
        RESULTS: state => {
            return state.results
        },

        //For creator
        ACTIVERESULT: state => {
            return state.activeTest
        },
    },

    mutations:{
        setResults(state, results){
            state.results = results
        },

        setActiveResult(state, activeResult){
            state.activeResult = activeResult
        },

        addAnswerForAR(state, activeResult){
            state.activeResult = activeResult
        },
    },

    actions: {
        getResults : async (context) => {
            let getResults = []
            //const response1 = await axios.get(API_URL + USER_API_URL + '/?id=' + sessionStorage.getItem("UserID"));
            const response2 = await axios.get(API_URL + RESULTS_API_URL);
            //const userTestsId = response1.data[0].test_by_invite
            const allResults = response2.data

            allResults.forEach(function (item){
                if (item.user_id === sessionStorage.getItem("UserID")){
                    getResults.push(item)
                }
                if (context.state.roles === "creator" && item.creator_id === sessionStorage.getItem("UserID")){
                    getResults.push(item)
                }
            })

            //alert(response2.data.length)
            context.commit("setResults", getResults)

        },

        setActiveResult : async (context, id) => {
            //TODO мб неправильно
            const cResult = context.state.results.find(el => el.id === id)

            context.commit("setActiveResult", cResult)
        },

        //For creator
        addComment: async (context, comment) => {
            //TODO мб неправильно
            context.state.activeResult.comment = comment
            await axios.put(API_URL + RESULTS_API_URL + "/?id=" + context.state.activeResult.id,
                {...context.state.activeResult, comment: comment})
        },
    }
}