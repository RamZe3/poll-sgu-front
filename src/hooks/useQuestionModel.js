import { ref} from "vue";


export function useQuestionModel() {
    const questionsCount = ref(0)
    const questions = ref([])

    const setQuestions = (questionsC) => {
        questionsCount.value = questionsC
        for (let i = 0; i < questionsCount.value; i++){
            questions.value.push(false)
        }
    }

    const setAnswer = (number, bool) => {
        questions.value[number] = bool
    }

    const  getEmptyAnswers = () => {
        let emptyAnswers = []
        for (let i = 0; i < questions.value.length; i++){
            if (!questions.value[i]){
                emptyAnswers.push(i)
            }
        }
        return emptyAnswers
    }

    //onMounted(setQuestions)
    return {
        questions, questionsCount,
        setQuestions, setAnswer,
        getEmptyAnswers
    }
}