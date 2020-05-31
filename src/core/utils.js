export function getHash() {
  return location.hash ? location.hash.slice(1) : '';
}

export function node(selector) {
  return document.querySelector(selector);
}

export function isResultHash() {
  return getHash() === 'result';
}
