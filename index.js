const categoryList = document.getElementsByClassName('category-list');
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const categoryBtn = document.querySelectorAll('.category-btn');

const filterCategory = ()=>{
   const searchValue = (searchInput.value).toLowerCase();
   const categoryItems = document.querySelectorAll('.category-item')
   const activeCategory = document.querySelector('.category-btn.active').dataset.category
   categoryItems.forEach(item=>{
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;
        if((title.includes(searchValue) || searchValue=='') && (category===activeCategory || activeCategory==='all')){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
   })
}

const setCategory = (e)=>{
    categoryBtn.forEach(btn=>{
        btn.classList.remove("active");
    })

    e.target.classList.add("active");
    filterCategory();
}


categoryBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log('Button clicked:', btn.textContent);
        setCategory(e)
    });
});



searchInput.addEventListener('keyup',(e)=>{
    filterCategory()
})

// searchBtn.addEventListener('click',(e)=>{
//     filterCategory()
// })
