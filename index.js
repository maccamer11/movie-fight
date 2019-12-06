const fetchData = async (searchTerm) => {
    const res = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'c4e90420',
            s: searchTerm
        }
    });

    if (res.data.Error) {
        return []
    }


    return res.data.Search
}

const input = document.querySelector('input')

const onInput = debounce(async event => {
    const movies = await fetchData(event.target.value)
    for (let movie of movies) {
        const div = document.createElement('div')

        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>`

        document.querySelector('#target').appendChild(div)
    }
})
input.addEventListener('input', onInput, 500)

