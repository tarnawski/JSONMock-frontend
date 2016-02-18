describe('Dashboard', function() {
  var dashboardPage = require('./pages/dashboard.po.js');

  beforeEach(function () {
    dashboardPage.open();
    browser.executeScript('window.localStorage.setItem("APP_KEY", "W4ECYPBAFLT2ZDIH7K3SO0GNVJ1U5XQM9R86");');
  });

  afterEach(function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('should navigate to dashboard page', function() {
    browser.executeScript('window.localStorage.setItem("APP_KEY", "W4ECYPBAFLT2ZDIH7K3SO0GNVJ1U5XQM9R86");');
    console.log(browser.executeScript('window.localStorage.getItem("APP_KEY");'));
    expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
  });
});
