const form = document.querySelector("#searchForm")
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const SearchTerm = form.elements.query.value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${SearchTerm}`)
    createImg(response.data)
    form.elements.query.value = ""
})

const createImg = async (shows) => {
    for(let result of shows){
        if(result.show.image){
        let img = document.createElement("img")
        img.src = result.show.image.medium
        let div = document.createElement("div")
        div.classList.add("card")
        document.body.append(img)
        const container = document.querySelector("#container")
    }console.log("error")
    }
}