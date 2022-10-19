/* function doubletIt(num){
    const result = num * 2;
    return result;
}
const first =doubletIt(5);
const second = doubletIt(7); */


function getInputValue() {
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // clear the dposit input field
    depositInput.value = '';
    return newDepositAmount;
}















document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountText= depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
    // console.log(depositAmount);
    const newDepositAmount = getInputValue();
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositeText = depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText)

    // console.log(previousDepositeAmount,newDepositAmount);
    const newDepositTotal = previousDepositeAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update account balance
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;





});
//  handle withdraw event handeler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdraw = parseFloat(withdrawAmountText);
    console.log(newWithdraw);
    // set with draw total
    const withdrawTotal = document.getElementById('withdraw-amount');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // console.log(previousWithdrawTotal);
    const newWithdrawTotal = previousWithdrawTotal + newWithdraw;
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-amount');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdraw;
    balanceTotal.innerText = newBalanceTotal;



    // clear withdraw input
    withdrawInput.value = '';
})