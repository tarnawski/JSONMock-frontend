var Home = function(){

  this.nameInput = element(by.model('home.appName'));
  this.loginInput = element(by.model('home.appKey'));
  this.succes = element(by.css('.complete'));
  this.submitButton = element(by.buttonText('Create new application'));
  this.loginButton = element(by.buttonText('Login to application'));

  this.register = function() {
    this.nameInput.sendKeys(browser.params.register.name);
    this.submitButton.click();
    browser.waitForAngular();
  };

  this.login = function() {
    this.loginInput.sendKeys(browser.params.login.APP_KEY);
    this.loginButton.click();
    browser.waitForAngular();
  };

  this.open = function() {
    browser.get('/');
  }
};

module.exports = new Home();
