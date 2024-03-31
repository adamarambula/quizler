const createPrompt = ({numQuestions = 1, numChoices = 2} = {}) => {
    
    numQuestions = numQuestions !== undefined ? numQuestions : 1;
    numChoices = numChoices !== undefined ? numChoices : 2;

    const questionOrChoiceObject = (type, name, message) => {
        return {
            type,
            name,
            message
        };
    };

    const questionsAndChoicesArray = []

    const createQuestionsAndChoices =(numberOfQuestions, numberOfChoices) => {
        //Questions
        for (let indexQuestion = 1; indexQuestion <= numberOfQuestions; indexQuestion++) {
            
            let typeQuestion = 'input'
            let nameQuestion = 'question-' + indexQuestion 
            let messageQuestion = 'Enter question ' + indexQuestion
        
            questionsAndChoicesArray.push(questionOrChoiceObject(typeQuestion,nameQuestion,messageQuestion))
            
            //Choices
                for (let indexChoice = 1;  indexChoice <= numberOfChoices; indexChoice++){
                   
                    let typeChoice = 'input'
                    let nameChoice = 'question-'+ indexQuestion + '-choice-' + indexChoice
                    let messageChoice = 'Enter answer choice ' + indexChoice + ' for question ' + indexQuestion
            
                    questionsAndChoicesArray.push(questionOrChoiceObject(typeChoice,nameChoice,messageChoice))
            }
        }
    }

    if (numQuestions === undefined || numChoices === undefined){
        
        createQuestionsAndChoices(1,2)
        return questionsAndChoicesArray
    }
    
    createQuestionsAndChoices(numQuestions, numChoices)
    
      return questionsAndChoicesArray
}

// console.log('---------------Negative------------------------------')
// console.log(createPrompt(undefined))
// console.log('---------------------------------------------')
// console.log(createPrompt({numQuestions : -1, numChoices : 2}))
// console.log('---------------------------------------------')
// console.log(createPrompt({'numQuestions' : 1, 'numChoices' : 1}))
// console.log('---------------Positive------------------------------')
// console.log(createPrompt({numQuestions : 2, numChoices : 2}))

console.log(createPrompt({}))