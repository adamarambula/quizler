const createQuestions = (object = {}) => {

    if(object === undefined){
        return []
    }

    let numChoices = 0;

    for(const key in object){
        if(key.includes('choice')){
            numChoices ++;
        }
    }

    const numQuestions = (Object.keys(object).length) - numChoices

    
    const questionObject = (type, name, message, choices) => {
        return {
            type,
            name,
            message,
            choices
        };
    }

    const allQuestionObjects = []


    for (let index = 1; index <= numQuestions; index++) {

        let questionsAndChoices = []

        let choices = []

        for (const key in object) {
            if (key === 'question-' + index) {
                questionsAndChoices.push(object[key]); 
            } else if (key.startsWith('question-' + index + '-choice')) {
                choices.push(object[key]); 
            }
        }

        questionsAndChoices.push(choices)

        if(questionsAndChoices.length > 1){
            let type = 'list';
            let name = 'question-'+index;
            let message = questionsAndChoices[0];
            let choice = questionsAndChoices[1];
    
            allQuestionObjects.push(questionObject(type, name, message, choice));
        }
    }

    return allQuestionObjects
  }

//   console.log(  createQuestions({
//     'question-1': 'Do you think you\'re ready for this?',
//     'question-1-choice-1': 'Beyond ready!!!',
//     'question-1-choice-2': 'Totally!',
//     'question-2': 'Are you loving JS yet?',
//     'question-2-choice-1': 'It\'s tubular!',
//     'question-2-choice-2': 'Way rad man!'
//   }))
  
  console.log(  
    createQuestions({
    'question-1': "",
    'question-1-choice-1': "",
    'question-1-choice-2': "",
    'question-2': "\"",
    'question-2-choice-1': "",
    'question-2-choice-2': ""
  }))

//The test case that is failing
// console.log(
//     createQuestions({
//     'question-1' : "", 
//     'question-1-choice-1' : "", 
//     'question-1-choice-2' : "", 
//     'question-2' : "", 
//     'question-2-choice-1' : "", 
//     'question-2-choice-2' : ""
// }))


// [
//     { // Repeated for the total number of questions
//       type: 'list',
//       name: 'question-1',
//       message: 'Do you think you\'re ready for this?',
//       choices: [
//         'Beyond ready!!!',
//         'Totally!'
//       ]
//     }, { // Repeated for the total number of questions
//       type: 'list',
//       name: 'question-2',
//       message: 'Are you loving JS yet?',
//       choices: [
//         'It\'s tubular!',
//         'Way rad man!'
//       ]
//     }
//   ]