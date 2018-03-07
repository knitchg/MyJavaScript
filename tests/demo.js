module.exports = {
    '@tags': ['demo'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(2)') //to click a button that has an ID element use #
        .pause(5000)
        .end();
    }
  };