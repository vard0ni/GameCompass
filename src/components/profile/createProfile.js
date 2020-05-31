import {QUESTIONS} from './question';

function generateInputs(inputs) {
  let result = [];
  inputs.forEach(i => result.push(input(i)));
  return result.join('');
}

function input({id, label, value}) {
  return `
        <div class="answer">
            <div class="pretty p-icon p-round p-pulse">
                <input type="checkbox" value="${value}" id="${id}" name="${id}"/>
                <div class="state p-success">
                    <i class="icon mdi mdi-check"></i>
                    <label>${label}</label>
                </div>
            </div>
        </div>
  `
}

function generateQuestion({title, inputs}) {
  return `
    <div class="question">
        <div class="title">${title}</div>
        <div class="answers">${generateInputs(inputs)}</div>
    </div>
  `
}

export function createProfile() {
  let profile = [];
  QUESTIONS.forEach(q => profile.push(generateQuestion(q)));
  return profile.join('');
}
