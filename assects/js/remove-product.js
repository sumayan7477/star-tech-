function deletPdt(){
    // get from products
    const idNames = document.getElementsByClassName('pdtId');
    // get from input
    const idNameInput = document.getElementById('pdtIdInput');
    const  inputIddValue=idNameInput.value;
    const inputIdValueInNumber=parseFloat(inputIddValue);
    for(idName of idNames){
        const idfromPdt = idName.innerText;
        const idfromPdtNumber=parseFloat(idfromPdt);
        if(idfromPdtNumber == inputIdValueInNumber){
           const pdtRow = document.getElementById(idfromPdtNumber);
           pdtRow.classList=`d-none`;
           console.log(pdtRow);
            console.log('matched');
        }
        else{
            console.log('not matched');
        }
    };  
};
