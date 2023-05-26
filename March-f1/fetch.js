// fetch is used to read data or do an http operation which returns a promise with a response containing
// readable stream handled by .then() and .catch()

const imgEle = document.createElement("img")

// fetch("https://dog.ceo/api/breeds/image/random")
// .then((data) => {
//     return data.json()
// })
// .then((responseJson) => {
//     console.log(responseJson)
//     const dogImg = document.getElementById("dog")
//     dogImg.setAttribute("src" , responseJson.message)
//     document.body.append(dogImg)
// })

//using async await.

const func1 = async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const DogImg = await response.json()
        console.log(DogImg)
        imgEle.setAttribute("src" , DogImg.message)
        document.body.append(imgEle)
    }
    catch (error){
        console.log(error)
    }
}

func1()