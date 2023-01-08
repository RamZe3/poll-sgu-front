import axios from "axios";
import {API_URL, RESULTS_API_URL} from "@/common/API";
import {getPsyhoResult} from "@/common/psyhoTestLogic";

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

        //addAnswerForAR(state, activeResult){
        //    state.activeResult.comment = activeResult
        //},
    },

    actions: {
        getResults : async (context) => {
            let getResults = []

            const resultResponse = await axios.get(API_URL + RESULTS_API_URL);
            const allResults = resultResponse.data

            allResults.forEach(function (item){
                if (item.user_id === sessionStorage.getItem("UserID")){
                    getResults.push(item)
                }
                //TODO переделать (не помню зачем)
                else if (item.creator_id === sessionStorage.getItem("UserID")){
                    getResults.push(item)
                }
            })

            context.commit("setResults", getResults)

        },

        setActiveResult : async (context, id) => {
            const cResult = context.state.results.find(el => el.id === id)

            if (cResult.type === "Psiho"){
                cResult.comment = getPsyhoResult(cResult)
            }

            context.commit("setActiveResult", cResult)
        },
    }
}