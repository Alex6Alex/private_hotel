export default class FormValidator {
  constructor() {
    this.rules = {};
  }

  setRule(fieldName, ruleData) {
    if (!this.rules[fieldName]) this.rules[fieldName] = [];

    switch (ruleData.rule) {
      case 'minLengthRule':
        this.rules[fieldName].push(new MinLengthRule(ruleData.minLength));
        break;
      case 'formatRule':
        this.rules[fieldName].push(new FormatRule(ruleData.format));
        break;
    }

    return this;
  }

  check(fieldName, fieldValue) {
    if (!this.rules[fieldName]) return true;
    let valid = true;

    this.rules[fieldName].forEach((rule) => valid &= rule.check(fieldValue));
    return valid;
  }
}

class MinLengthRule {
  constructor(minLength) {
    this.minLength = minLength;
  }

  check(value) {
    return value.length >= this.minLength;
  }
}

class FormatRule {
  constructor(format) {
    this.format = format;
  }

  check(value) {
    return value.match(this.format) !== null;
  }
}
