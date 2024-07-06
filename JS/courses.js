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

const courseDisplay = (data)=>{
    console.log(data);
}