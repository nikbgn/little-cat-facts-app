
const getCatFact = async() => {
    
    let catFact = await fetch('https://catfact.ninja/fact').then(res => res.json())
    let catForm = document.getElementById("fact")
    catForm.innerText = catFact['fact']
}



document.addEventListener("DOMContentLoaded", (event) =>{
    document.getElementById('factButton').addEventListener('click',()=>{
        getCatFact()
    })    
})