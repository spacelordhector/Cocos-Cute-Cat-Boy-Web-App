document.querySelector('a').addEventListener('click', anime)
function anime() {
    fetch(`https://api.catboys.com/img`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.url
        }
        )
        .catch(error => console.log(error))
}