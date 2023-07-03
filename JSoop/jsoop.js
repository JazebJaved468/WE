
let inp = document.getElementById('amount');
let addBtn = document.getElementById('debit');
let deductBtn = document.getElementById('credit');
let newResult = document.getElementById('newresult');
let prevBal = document.getElementById('prevbal');
let accInfo = document.getElementById('accinfo');

addBtn.addEventListener('click', debitBalance);
deductBtn.addEventListener('click', creditBalance);


class atm{
    constructor(acNo, acHoldName, bal){
        this.acNo = acNo;
        this.acHoldName = acHoldName;
        this.bal = bal;
    }
    
    getBalance(){
        return this.bal;
    }
    getID(){
        return this.acNo;
    }
    getName(){
        return this.acHoldName;
    }

    setBalance(i){
        this.bal = i;
    }

    credit(i){
        this.bal = this.bal - i;
    }

    debit(i){
        this.bal = this.bal + i;
    }
}

let acc1 = new atm("21030", "Jazeb", 20000);

let accID = acc1.getID();
let accName = acc1.getName();

function debitBalance(){
    let amount = +(inp.value)
    let showPrev = acc1.getBalance();
    acc1.debit(amount);

    let showNew = acc1.getBalance();

    prevBal.textContent = `Your Previous balance was ${showPrev}`;
    newResult.textContent = `Your New balance is ${showNew}`;

    accInfo.innerHTML = `<div id="accinfo">
    <h3>Account Details</h3>
    <p> AccountID : ${accID}</p>
    <p> AccountNAME : ${accName} </p>
    </div>`
}

function creditBalance(){
    let amount = +(inp.value)
    let showPrev = acc1.getBalance();
    acc1.credit(amount);

    let showNew = acc1.getBalance();

    prevBal.textContent = `Your Previous balance was ${showPrev}`;
    newResult.textContent = `Your New balance is ${showNew}`;
}

document.write("1");
document.write("Heloo")