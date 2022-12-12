import axios from "axios";
import {API_URL, RESULTS_API_URL} from "@/common/API";
import {getPsyhoResult} from "@/common/psyhoTestLogic";

export const creatorResultTestModule = {
    state: () => ({
        usersResults: [],
        usersResultsModel: new Map(),
        //usersResultsModelValue: new Map(),

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
        setResults(state, results){
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
        //getResults : async (context) => {
        //    let getResults = []
        //    //const response1 = await axios.get(API_URL + USER_API_URL + '/?id=' + sessionStorage.getItem("UserID"));
        //    const response2 = await axios.get(API_URL + RESULTS_API_URL);
        //    //const userTestsId = response1.data[0].test_by_invite
        //    const allResults = response2.data
//
        //    allResults.forEach(function (item){
        //        if (item.user_id === sessionStorage.getItem("UserID")){
        //            getResults.push(item)
        //        }
        //        //TODO переделать
        //        //console.log(context.state.roles.include("creator"))
        //        //if (context.state.roles.indexOf("creator") >0 && item.creator_id === sessionStorage.getItem("UserID")){
        //        if (item.creator_id === sessionStorage.getItem("UserID")){
        //            getResults.push(item)
        //        }
        //    })
//
        //    //alert(response2.data.length)
        //    context.commit("setResults", getResults)
//
        //},

        getUsersResult: async (context) => {
            let getResults = []
            const response2 = await axios.get(API_URL + RESULTS_API_URL);
            //const userTestsId = response1.data[0].test_by_invite
            const allResults = response2.data
            let res = new Map()
            //let res1 = new Map()

            for (const item of allResults) {
                            if (item.creator_id === sessionStorage.getItem("UserID")){
                                getResults.push(item)
                                //const response = await axios.get(API_URL + USERS_API_URL + '/?id=' + item.user_id);
                                if (!res.has(item.test_id)){
                                    //res.set(item.test_id, [item.user_id])
                                    res.set(item.test_id, [item.user_id])
                                    //res1.set(item.title, [response.data[0].login])
                                }
                                else {
                                    //res.set(item.test_id,
                                    //    [item.user_id , ...res.get(item.test_id)])
                                    res.set(item.test_id,
                                        [item.user_id , ...res.get(item.test_id)])
                                    //res1.set(item.title,
                                    //    [response.data[0].login , ...res1.get(item.test_id)])
                                }
                            }
                        }

            context.commit("setResults", getResults)
            context.commit("setResultsModel", res)
        },

        setActiveResult : async (context, id) => {
            //TODO мб неправильно
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