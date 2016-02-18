var Dashboard = function(){

  this.open = function() {
    browser.get('/dashboard');
  }
};

module.exports = new Dashboard();
