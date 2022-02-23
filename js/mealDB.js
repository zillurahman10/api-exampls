const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    // console.log(url);
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card withsupporting text below as a natural lead-in to
                additional content. This content is a littlebitlonger.</p>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    });
}
// displaySearchResult()