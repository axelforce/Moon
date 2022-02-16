const chai = require('chai');
const chaiThings = require('chai-things');
const chaiAlmost = require('chai-almost');
const chaiInteger = require('chai-integer');

chai.use(chaiThings);
chai.use(chaiAlmost());
chai.use(chaiInteger);
const { expect } = chai;

export default class AbstractAssertions {
  checkElementIsDisplayed($elemState, message) {
    expect($elemState, message).to.be.true;
  }

  checkElementIsNotDisplayed($elemState, message) {
    expect($elemState, message).to.be.false;
  }

  checkElementIsDisabled($elemState, message) {
    expect($elemState, message).to.be.false;
  }

  checkElementIsEnabled($elemState, message) {
    expect($elemState, message).to.be.true;
  }

  checkValuesAreEqual(value1, value2, message) {
    expect(value1, message).to.be.equal(value2);
  }

  checkValuesAreNotEqual(value1, value2) {
    expect(value1).not.to.be.equal(value2);
  }

  checkElementContainsText(actualText, expectedText, message) {
    expect(actualText, message).to.include(expectedText);
  }

  checkElementIsNotClickable($elemState, message) {
    expect($elemState, message).to.be.true;
  }
}