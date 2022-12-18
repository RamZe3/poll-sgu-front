import axios from "axios";
import {API_URL, RESULTS_API_URL} from "@/common/API";
import {getPsyhoResult} from "@/common/psyhoTestLogic";

export const creatorResultModule = {
    state: () => ({
        usersResults: [],
        usersResultsModel: new Map(),

        activeUserResult: null,
    }),

    getters:{
        USERSRESULTS: state => {
            return state.usersResults
        },

        USERSRESULTSMODEL: state => {
            return state.usersResults
        },

        //For creator
        ACTIVEUSERRESULT: state => {
            return state.activeUserResult
        },
    },

    mutations:{
        setUserResults(state, results){
            state.usersResults = results
        },

        setResultsModel(state, resultsModel){
            state.usersResultsModel = resultsModel
        },

        setActiveResult(state, activeResult){
            state.activeUserResult = activeResult
        },

        addAnswerForAR(state, activeResult){
            state.activeResult = activeResult
        },
    },

    actions: {
        getUsersResult: async (context) => {
            let getResults = []
            const resultsResponse = await axios.get(API_URL + RESULTS_API_URL);

            const allResults = resultsResponse.data
            let res = new Map()

            for (const item of allResults) {
                            if (item.creator_id === sessionStorage.getItem("UserID")){
                                getResults.push(item)
                                if (!res.has(item.test_id)){
                                    res.set(item.test_id, [item.user_id])
                                }
                                else {
                                    res.set(item.test_id,
                                        [item.user_id , ...res.get(item.test_id)])
                                }
                            }
                        }

            context.commit("setUserResults", getResults)
            context.commit("setResultsModel", res)
        },

        setActiveResult : async (context, id) => {
            const cResult = context.state.results.find(el => el.id === id)

            console.log(cResult.questions)
            if (cResult.type === "Psiho"){
                cResult.comment = getPsyhoResult(cResult)
            }

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