var Dashboard = function(){

  this.info = element(by.binding('info'));
  this.applicationDetails = element(by.css('.Application'));
  this.responsesList = element(by.css('.Response'));
  this.createResponse = element(by.css('.createResponse'));
  this.currentResponse = element(by.css('.currentResponse'));
  this.firstResponse = element.all(by.repeater('response in responses.responses')).get(0);

  this.open = function() {
    browser.get('/#/dashboard');
  }

};

module.exports = new Dashboard();
