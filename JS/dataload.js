const categoriesLoad = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const categories = await res.json();
    filterBtnDisplay(categories.data);
}
const loadCourseByCategories = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    courseDisplay(data.data);
}

categoriesLoad()