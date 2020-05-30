import {QUESTIONS} from './question';

function generateInputs(inputs) {
  let result = [];
  inputs.forEach(i => result.push(input(i)));
  return result.join('');
}

function input({id, label, value}) {
  return `
    <div class="question__input">
        <label for="${id}">${label}</label>
        <input type="radio" value="${value}" id="${id}" name="${id}">
    </div>
  `
}

function generateQuestion({title, inputs}) {
  return `
    <div class="question">
        <p>${title}</p>
        <div class="inputs">${generateInputs(inputs)}</div>
    </div>
  `
}

export function createProfile() {
  let profile = [];
  QUESTIONS.forEach(q => profile.push(generateQuestion(q)));
  return profile.join('');
}
