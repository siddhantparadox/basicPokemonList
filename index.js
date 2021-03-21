const container = document.querySelector('#container')


for (i=1; i<899; i++){
    
    const newImg= document.createElement('img')
    
    newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(newImg)
    
}



