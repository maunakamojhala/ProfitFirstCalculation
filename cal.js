function calculate() {
    var incomeAmt=document.getElementById("IncomeAmount").value;
    var profitValue=document.getElementById("profit").value;
    var ownerPayValue=document.getElementById("ownerPay").value;
    var taxValue=document.getElementById("tax").value;
    var otherValue=document.getElementById("otherValue").value;
    var salesToolsValue=document.getElementById("salesTools").value;
    var dgCostValue=document.getElementById("dgCost").value;
    document.getElementById('profitResult').innerHTML=incomeAmt*(profitValue/100);
    document.getElementById('OwnerPayResult').innerHTML=incomeAmt*(ownerPayValue/100);
    document.getElementById('taxResult').innerHTML=incomeAmt*(taxValue/100);
    document.getElementById('otherValueResult').innerHTML=incomeAmt*(otherValue/100);
    document.getElementById('salesToolsResult').innerHTML=incomeAmt*(salesToolsValue/100);
    document.getElementById('dgCostResult').innerHTML=incomeAmt*(dgCostValue/100);
}
function restrictValue() {
    var profitValue=document.getElementById("profit").value;
    if(profitValue>16.6){
event.preventDefault();
    }
    else{
    }
}
