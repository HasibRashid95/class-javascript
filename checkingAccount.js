"use strict";

class CheckingAccount  extends Account{
   
    constructor(number) {
       
       super(number);
       this.overdraft = 0.00;
      

    }

   
    getNumber() {
        return this._number;
    }

    getBalance() {
        return this._balance;
    }


    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
    }


    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this._balance <= this.overdraft) {
            throw Error("Insufficient funds, overdraft limit exceeds");
        }
       // console.log(this._balance);
        this._balance -= amount;
        console.log(this.overdraft);
        
    }

    getOverdraft() {
        return this.overdraft;
    }

    setOverdraft(amount) {
       this.overdraft = amount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance;
    }


    endOfMonth() {
        if(this._balance< 0){
            return "Too low"
        }
        return ; 
    }


}

