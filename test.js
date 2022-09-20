var acc = new Account("500 400 212");
 acc.deposit(500.00);

describe('getBalance', function() {
    it(" checks the balance", function(){
        assert.equal(acc.getBalance(), 500.00);
    });
  });

  describe('getNumber', function() {
    it(" checks the account number", function(){
        assert.equal(acc.getNumber(), "500 400 212");
    });
  });


  var savacc = new SavingsAccount("500 400 214");
  savacc.deposit(50000.00);
  savacc.setInterest(5.00);

describe('getBalanceSavings', function() {
    it(" checks the balance", function(){
        assert.equal(savacc.getBalance(), 50000.00);
    });
  });

  describe('getNumberSavings', function() {
    it(" checks the account number", function(){
        assert.equal(savacc.getNumber(), "500 400 214");
    });
  });

  

  describe('getInterestSavings', function() {
    it(" checks the interest amount", function(){
        assert.equal(savacc.endOfMonth(), 2500.00);
    });
  });


  var checkacc = new CheckingAccount("500 400 216");
  checkacc.deposit(50000.00);
  checkacc.setOverdraft(-500);
  checkacc.withdraw(50002.00);
  
  

describe('getBalanceChecking', function() {
    it(" checks the balance", function(){
        assert.equal(checkacc.getBalance(), -2.00);
    });
  });

  describe('getNumberChecking', function() {
    it(" checks the account number", function(){
        assert.equal(checkacc.getNumber(), "500 400 216");
    });
  });

  

  describe('getOverdraft', function() {
    it(" checks the overdraft amount", function(){
        assert.equal(checkacc.endOfMonth(), "Too low");
    });
  });