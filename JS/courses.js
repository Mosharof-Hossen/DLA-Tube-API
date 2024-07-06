const filterBtnDisplay = (categories) => {
    console.log(categories);
    const filterBtnDiv = document.getElementById('filter-btn-div');
    categories.forEach(category => {
        filterBtnDiv.innerHTML += `
        <button onclick="filterByID(${category.category_id})" class="filter rounded px-6 py-1 text-white bg-primaryColor">${category.category}</button>
        `
    });
}

const filterByID = (id) => {
    loadCourseByCategories(id);
}

const courseDisplay = (data) => {
    const parentDiv = document.getElementById("card-container");
    parentDiv.innerText = "";
    data.forEach(item => {
        const hours =  parseInt(item?.others?.posted_date / 3600);
        const min = parseInt((item?.others?.posted_date % 3600)/60)
    
        const childDiv = document.createElement('div');
        childDiv.className = "card rounded-md bg-base-100 w-80 shadow-md";
        childDiv.innerHTML = `
        <div class="hero h-44 rounded-md"
            style="background-image: url(${item?.thumbnail});">
            <div class="hero-overlay rounded-md bg-opacity-20"></div>

            ${
                (hours || min)?`<button class=" bg-black px-2 py-1 rounded-md text-white absolute right-2 top-36 text-[10px]">${hours} hrs ${min} min ago</button>`: ""
            }
        </div>
        <div class="pt-3 px-2 space-x-2 text-base font-bold flex justify-start items-center">
            <div class="avatar  mt-1">
                <div class=" w-8 h-8 rounded-full ">
                    <img src="${item?.authors[0]?.profile_picture}" />
                </div>
            </div>
            <h2 class="">${item?.title}</h2>
        </div>
        <div class="py-3 pl-12 space-y-1">
            <div class="flex justify-start items-center space-x-2">
                <p class="text-sm">${item?.authors[0]?.profile_name}</p>
                <img class=" w-[16px] h-[16px] rounded-full " src="./images/icons/verifed.png" alt=""
                    srcset="">
            </div>
            <p class="text-sm">${item?.others?.views} views</p>

        </div>
        `
        parentDiv.appendChild(childDiv);
    });
}