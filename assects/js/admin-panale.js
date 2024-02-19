function showAdmin(){
    // get data from input
   const username = document.getElementById('floatingInput');
   const name = username.value;
//    console.log(name);
   const password =document.getElementById('floatingPassword');
   const pass = password.value;

   const sumayaname='sumaya';
   const p12345=12345;
    // match data
    if(name==sumayaname && pass==p12345){
        const from = document.getElementById('loginfrom');
        from.classList.add(`hidden`);
        const panel = document.getElementById('admin-panale');
        panel.classList.remove(`hidden`);
    }
    else{
        const incorrect = document.getElementById('incpass');
        incorrect.classList.remove(`hidden`);
    }
};
