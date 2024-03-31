import fs from 'fs'

// - [ ] Should always return an array
// - [ ] Should not mutate the array passed in (Use map)
// - [ ] Should return a random array if possible (size > 1)
// - [ ] Should return an array of the passed in length (map keeps the array length)
// - [ ] Run command ```npm test``` and ensure all tests for chooseRandom pass successfully

export const chooseRandom = (array, numItems) => {
 
  if(array.length === 0 || array.length === 1){
    return array;
  }
  
  //If numItem doesn't fit the range then create one that does
  if(numItems < 1 && numItems > array.length){
    numItems = Math.floor(Math.random() * array.length + 1);
  }

  //Array inialized to number of items 
  const randomArray = Array(numItems);
  
  //Function that che checks if element is already included
  //TODO: Change to a map
  const randomArrayImpl = (array, randomArray) => {
    
    for (let index = 0; index < array.randomArray; index++) {
      const element = array[index];
      if(!randomArray.includes(element)){
        randomArray.push(element);
      }
    }

    return randomArray

  }

  return randomArrayImpl(array, randomArray);

}


export const createPrompt = ({numQuestions = 1, numChoices = 2} = {}) => {
    
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


export const createQuestions = (object = {}) => {

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

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
