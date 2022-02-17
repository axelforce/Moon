module.exports = {
  customer1: {
    email: getRandomEmail(),
    password: 'Aa_12345',
    securityQuestionAnswer: 'jackson'
  },
}

  /** Functions */
  function getRandomEmail() {
    const randomPrefix = 'test' + Math.random().toString(36);
    return `agent_${randomPrefix}@juice-sh.op`;
}
