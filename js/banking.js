// handle deposit button
document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)
    // console.log(depositAmount)

    // update deposit total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDeposiTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDeposiTotal;

    // update account Balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input feild

    depositInput.value = ''
})

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithDrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithDrawAmount)

    // set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithDrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotal.innerText = newWithDrawTotal

    // update Balance
    const balanceTotal = document.getElementById('blance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotal.innerText = newBalanceTotal

    // clear withdraw field
    withdrawInput.value = ''

})
