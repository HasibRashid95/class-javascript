class Bank {
    static nextNumber = 500400218;
    constructor(accounts) {
        this._accounts = accounts;
    }

    addAccount() {
        let account = new Account(this.getNextNumber());
        this._accounts.push(account);
        return this._accounts.length;
    }

    addSavingsAccount(interest) {
        let sAccount = new SavingsAccount(this.getNextNumber(), interest);
        this._accounts.push(sAccount);
        return this._accounts.length;
    }

    static getNextNumber() {
        return this.nextNumber++;
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter(a => a.getNumber() !== number);
    }

    endOfMonth() {
        a.endOfMonth(); 
    }
}