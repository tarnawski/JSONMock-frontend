describe('Home', function() {
  var homePage = require('./pages/home.po.js');

  beforeEach(function () {
    homePage.open();
  });

  afterEach(function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('should navigate to login page', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should not navigate to another page when user is not logged', function() {
    browser.get('/#/dashboard');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should display register form', function() {
    expect(homePage.nameInput.isPresent()).toBe(true);
  });

  it('should display login form', function() {
    expect(homePage.loginInput.isPresent()).toBe(true);
  });

  it('id should display APP_KEY', function() {
    homePage.register();
    expect(homePage.succes.isDisplayed()).toBe(true);
  });

  it('id should login and redirect to dashboard', function() {
    homePage.login();
    expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
  });

});
