
function getInput(inputPlace){
    const getAmountPlace    = document.getElementById(inputPlace);
    const getAmountText     = getAmountPlace.value; 
    const getAmount         = parseFloat(getAmountText); 

    //Clear Inpupt Field
    getAmountPlace.value = ""; 
    return getAmount; 
}

function updateAmount (updatePlace, inputAmount){
    const updateAmountPlace = document.getElementById(updatePlace); 
    const updateAmountText  = updateAmountPlace.innerText; 
    let updateAmount      = parseFloat(updateAmountText); 
    updateAmount = parseFloat(inputAmount+updateAmount); 
    updateAmountPlace.innerText= updateAmount; 
    return updateAmount; 
}

function getBalance(inputBalance){
    const inputAmountPlace  = document.getElementById(inputBalance);
    const inputAmountText   = inputAmountPlace.innerText; 
    const inputAmount       = parseFloat(inputAmountText); 
    
    return inputAmount; 
}

function updateBalance (amount, isADD){
   const updateBalanceId        = document.getElementById('balance-total');
  let previouosBalance= getBalance('balance-total');
  if(isADD==true){
      updateBalanceId.innerText= previouosBalance+amount
  }
  if(isADD==false){
    updateBalanceId.innerText= previouosBalance-amount
}
}


function testClick(id){
    if(id=='deposit-btn'){
    document.getElementById(id).addEventListener('click', function(){
        const presentDeposit = getInput('deposit-money'); 
        if(presentDeposit>0){
            updateAmount('deposit-total',presentDeposit); 
            updateBalance(presentDeposit,true); 
        }
        
    })
    }
    else if(id=='withdraw-btn'){
        const presentWithdraw = getInput('withdraw-money');
    const currentBalalnce = getBalance('balance-total');
    if(presentWithdraw>0 &&presentWithdraw<currentBalalnce){
        updateAmount('withdraw-total',presentWithdraw)
        updateBalance(presentWithdraw,false)
    }
    else{
        alert("You Dont have a permission to withdraw")
    }
    }
}