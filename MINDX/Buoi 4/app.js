localStorage.setItem('text', 'value')
let movie = [
    {
        name : "Matcha-Matme"
    
    },
    {
        name :  "yỏu name"

    }   
]
localStorage.setItem('movie', JSON.stringify(movie))

let get_test =localStorage.getItem('test')
console.log(get_test)
let get_movie = localStorage.getItem('movie')
console.log(JSON.stringify(movie))
setTimeout(function() => {
    console.log('movie setTimeout')
}, 3000);
