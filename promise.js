//criando um promise

/*const promise = new Promise((resolve, reject)=>{
    const num = 34
    resolve(num)
})

promise
    .then( value => value)
    .then(vaue => console.log(value))
    .catch(error => console.log(`request mal sucedido: ${Exception(error)}`))
  */

const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

const validateHTTPStatus = dogData =>{
    if(!dogData.ok){ //ok-> verifica se o status code do http está entre 200 e 299
            throw new Error(`HTTP error, status ${ dogData.status}`)
    }
    return dogData.json()
}

const setDogImage = ({message: url})=>{
    dogImg.setAttribute('src', url)
}

const randomRequestError = error =>{
    console.log(error.message)
}

fetch(url)
.then(validateHTTPStatus)
.then(setDogImage)
.catch(randomRequestError)