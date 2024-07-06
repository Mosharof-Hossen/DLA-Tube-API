const categoriesLoad = async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const categories = await res.json();
    filterBtnDisplay(categories.data);
}

categoriesLoad()