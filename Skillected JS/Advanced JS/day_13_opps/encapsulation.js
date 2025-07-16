class BankAccount{
  #balance = 0;
  
  deposit(amount){
    if(amount>0) this.#balance = amount;
  }

  getbalance(){
    return this.#balance
  }
}

const acc = new BankAccount

acc.deposit(5000)

console.log(acc.getbalance())