// get all data ${searchText}
// const loadPhone = async () => {
//     const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=phone`);
//     const data = await res.json();
//     const phone = data.data;

// };


// make cards

// const displayphone =phones =>{
//     const phoneCont= document.getElementById('mobilr-cards');
//     phones.forEach(phone => {
//         console.log(phone);
//         const phonecard = document.createElement('div');
//         phonecard.classList=`p-5 bg-white w-1/3 rounded-lg`;
//         phonecard.innerHTML=`
//         <div id="card " class="p-5 bg-white w-1/3 rounded-lg">
//                 <img class="h-2/3" src="${phone.image}" alt="">
//                 <div class="flex justify-between my-3">
//                     <p class="text-gray-500 text-base "> <i class="fa-regular fa-calendar-days mr-2"></i>18 Dec 2023 - 15 Jan 2024</p> <p class="text-gray-500 text-sm"><i class="fa-solid fa-location-dot mr-2"></i>All Branches</p>
//                 </div>
//                 <hr>
//                 <div class=" flex flex-col justify-around items-center mb-5 mt-3 gap-3">
//                     <h2 class="text-gray-800 text-xl font-bold">${phone.phone_name}</h2>
//                     <p class="text-gray-500">Buy ViewSonic Monitor & Get 1000 Taka Cashback</p>
//                     <button class="bg-blue-600 text-white  w-1/3 h-10 rounded-lg">View Detsils</button>
//                 </div>
//         </div>
//         `
//     });

//     phoneCont.appendChild(phonecard);
// };



// progremming hero code

const loadPhone = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}


const displayPhones = (phones, isShowAll) => {
    // console.log(phones)

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    // console.log('is show all', isShowAll)
    // display only first 12 phones if not show All
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        // console.log(phone);
        // 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // 3: set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>

        `;
        // 4 append child
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner
    toggleLoadingSpinner(false);
}

// 
const handleShowDetail = async (id) => {
    // console.log('clicked show details', id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)

}

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `

        <div class="card  ">
        <div class="images  p-3">
            <img src="${phone.image}" alt="">
        </div>
        <div class="infos  p-3 mr-5">
            <p class="text-gray-500 text-sm uppercase">latest product</p>
            <h2 class="text-3xl uppercase">${phone.name}</h2>
            <p class="absolute right-10 uppercase text-xs bg-gray-300 rounded-md p-1 inline-block">with fitures</p>
            <div class="price flex justify-between items-center my-3">
                <div class="left ">
                    <p class="text-gray-500">price</p>
                    <h2 class="text-3xl">$453</h2>
                    <p class="text-xs text-gray-500">with shiping</p>
                </div>
                <div class="reating flex items-center ">
                    <i class="fa-solid fa-star text-blue-600"></i>
                    <i class="fa-solid fa-star text-blue-600"></i>
                    <i class="fa-solid fa-star text-blue-600"></i>
                    <i class="fa-solid fa-star text-blue-600"></i>
                    <i class="fa-solid fa-star text-blue-100"></i>
                    <p class="text-xs ml-1 text-gray-400">(74 Reviews)</p>
                </div>
                
            </div>
            <div class="tabes my-3">
                    <div role="tablist" class="tabs tabs-boxed bg-transparent">
                        <a role="tab" class="tab">Tab 1</a>
                        <a role="tab" class="tab tab-active">Tab 2</a>
                        <a role="tab" class="tab">Tab 3</a>
                    </div>
                    <p class="text-justify text-sm mt-2">
                    <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
                    <p><span>GPS:</span>${phone.others?.GPS || 'No GPS available'}</p>
                    <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
                    </p>
            </div>
            <div class="amount flex justify-between">
                    <div class="quantity ">
                        <p class="">Quantity</p><br>
                        <div class="flex -mt-5 gap-3">
                             <button class="bg-blue-500 w-6 text-white">-</button>
                            <p>3</p>
                            <button class="bg-blue-500 w-6 text-white">+</button>
                        </div>
                       
                    </div>
                    <div class="color">
                        <p>Color</p>
                        <div class="flex gap-2">
                            <button class="bg-red-600 w-6" >.</button>
                            <button class="bg-yellow-300 w-6">.</button>
                            <button class="bg-purple-800 w-6">.</button>
                            <button class="bg-green-400 w-6" >.</button>
                        </div>
                        

                    </div>
            </div>
            <div class="buttons my-3">
                <button class="bg-blue-500  text-white p-2 px-4 mr-5 uppercase hover:bg-gray-900" >add to cart</button>
                <button class=" border border-blue-500 p-2 px-2 uppercase  hover:bg-gray-900 hover:text-white">add to payment</button>
            </div>
           
        </div>
        
    </div>
    `

    // show the modal
    show_details_modal.showModal();
}


// handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}
// handle search recap
// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

// handle show all
const handleShowAll = () => {
    handleSearch(true);
}

loadPhone();