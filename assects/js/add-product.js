
document.getElementById('update-btn').addEventListener('click',function(){
    // where to add
    const tableBody=document.getElementById('table');

    // what to add
    
    const tr=document.createElement('tr');
    const th=document.createElement('th');
    const td1=document.createElement('td');
    const td2=document.createElement('td');
    const td3=document.createElement('td');
    const td4=document.createElement('td');
    const td5=document.createElement('td');


     // get product number
     const number=document.getElementById('pdtNumbar');
     const pdtNumber=number.value;
     th.innerText=pdtNumber;

    // get product name
    const name=document.getElementById('pdtName');
    const pdtName=name.value;
    td1.innerText=pdtName;

    // get product id
    const Id=document.getElementById('pdtId');
    const pdtId=Id.value;
    td2.innerText=pdtId;
    
    // get product details
    const Details=document.getElementById('pdtDetails');
    const pdtDetails=Details.value;
    td3.innerText=pdtDetails;
    

    // get product price
    const price=document.getElementById('pdtprice');
    const pdtprice=price.value;
    td4.innerText=pdtprice;


    // get icons
    const allIcon=document.getElementById('icons');
    const Icons=allIcon.innerHTML;
    td5.innerHTML=Icons;
    td5.classList=`d-flex gap-3`;

    // add all
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tableBody.appendChild(tr);
  
    clearAll();
});

// clear all by calcel button
function clearAll() {
    const inputFilds=document.getElementsByTagName('input');
    console.log(inputFilds);
    for(const input of inputFilds){
        console.log(input);
        input.value='';
    };
};


// const name=document.getElementById('pdtName');
// console.log("lihfairgvuriuh");


