//create obj which is capable of making an api call
const request = new XMLHttpRequest()

// open the connect to the API with http method & url
request.open("GET" , "https://restcountries.com/v3.1/all", true)

//send the request to the server
request.send(null)

// parse the text passed on from the server

request.onload = function () {
    const response = JSON.parse(request.responseText)
    console.log(response)
}

request.onerror = function () {
    console.log("error! something went wrong")
}