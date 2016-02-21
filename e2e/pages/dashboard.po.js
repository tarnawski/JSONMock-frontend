var Dashboard = function(){

  this.info = element(by.binding('info'));
  this.applicationDetails = element(by.css('.Application'));
  this.responsesList = element(by.css('.Response'));
  this.createResponse = element(by.css('.createResponse'));
  this.currentResponse = element(by.css('.currentResponse'));
  this.firstResponse = element.all(by.repeater('response in responses.responses')).get(0);

  this.responseName = element(by.model('currentResponse.response.name'));
  this.responseUrl = element(by.model('currentResponse.response.url'));
  this.responseMethod = element(by.model('currentResponse.response.method'));
  this.responseStatusCode = element(by.model('currentResponse.response.status_code'));
  this.responseValue = element(by.model('currentResponse.response.jsonValue'));



  this.open = function() {
    browser.get('/#/dashboard');
  }

};

module.exports = new Dashboard();
