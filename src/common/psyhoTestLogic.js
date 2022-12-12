function getPsyhoResult(result) {
    let balls = 0;
    console.log(result)
    for (let i = 0; i < result.questions.length; i++){
        balls += Number(result.questions[i].answers[result.questions[i].answer[0]].value)
    }

    for (let i = 0; i < result.ballings.length; i++){
        console.log("min " + result.ballings[i].minValue + " max " + result.ballings[i].maxValue + " balls " + balls)
        if (result.ballings[i].minValue <= balls && result.ballings[i].maxValue >= balls){
            console.log("Получилось")
            return result.ballings[i].answer
        }
    }

    return "Нет ответа"
    }

export {getPsyhoResult}