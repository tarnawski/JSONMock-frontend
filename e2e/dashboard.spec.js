describe('Dashboard', function() {
  var dashboardPage = require('./pages/dashboard.po.js');
  var homePage = require('./pages/home.po.js');

  beforeEach(function () {
    homePage.open();
    homePage.login();
  });

  afterEach(function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('should show dashboard', function() {

    expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
  });

  it('after login should show app details, response list and form to create response', function() {
    expect(dashboardPage.applicationDetails.isDisplayed()).toBe(true);
    expect(dashboardPage.responsesList.isDisplayed()).toBe(true);
    expect(dashboardPage.createResponse.isDisplayed()).toBe(true);
    expect(dashboardPage.currentResponse.isDisplayed()).toBe(false);
  });

  it('after to some(first) response should show form to edit response', function() {
    dashboardPage.firstResponse.click();
    expect(dashboardPage.applicationDetails.isDisplayed()).toBe(true);
    expect(dashboardPage.responsesList.isDisplayed()).toBe(true);
    expect(dashboardPage.createResponse.isDisplayed()).toBe(false);
    expect(dashboardPage.currentResponse.isDisplayed()).toBe(true);
  });
});
