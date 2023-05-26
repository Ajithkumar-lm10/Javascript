// fetch is a function that allows me to fetch data form url
//fetch returns a promise
//response is not a acutuall response you need. it is acutually a response object, and you need to say
// response.json() to get the data.

fetch("https://dummyjson.com/quotes/random")
.then((response) => {
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(data)
    console.log(data.author)
})