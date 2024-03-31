const createPrompt = ({numQuestions = 1, numChoices = 2} = {}) => {
    const prompts = [];
    for (let i = 1; i <= numQuestions; i++) {
      prompts.push({
        type: 'input',
        name: `question-${i}`,
        message: `Enter question ${i}`
      });
      for (let j = 1; j <= numChoices; j++) {
        prompts.push({
          type: 'input',
          name: `question-${i}-choice-${j}`,
          message: `Enter answer choice ${j} for question ${i}`
        });
      }
    }
    return prompts;
  }

// console.log('---------------Negative------------------------------')
// console.log(createPrompt({}))
// console.log(createPrompt())
// console.log(createPrompt(undefined))
// console.log('---------------------------------------------')
// console.log(createPrompt({'numQuestions' : 1, 'numChoices' : 1}))
// console.log('---------------Positive------------------------------')
// console.log(createPrompt({numQuestions : 2, numChoices : 4}))