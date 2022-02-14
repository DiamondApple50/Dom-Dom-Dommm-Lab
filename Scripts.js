window.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button')
    let div = document.createElement('div')
    let text = document.createTextNode('Add Square')
    div.className = "container"

    button.appendChild(text)
    document.body.appendChild(button)
    document.body.appendChild(div)


    const listItemButton = document.querySelector('button');
    let listCount = 0;
    listItemButton.addEventListener("click", function () {
        const newDiv = document.createElement("div");
        newDiv.id = listCount
        listCount++
        console.log(listCount)
        newDiv.addEventListener("dblclick", function () {
            if (listCount % 2 == 0) {
                newDiv.remove(listCount + 1);
            }
            if (listCount % 2 == 1) {
                newDiv.remove(listCount - 1);
            }
        })
        newDiv.className = 'box'
        div.appendChild(newDiv)
        newDiv.id = `ID = ${listCount}` 
        let textContent = document.createTextNode('Id = ' + listCount)
        newDiv.appendChild(textContent)
        newDiv.addEventListener("click", setRandomColor)
        newDiv.addEventListener("mouseover", hover)
        newDiv.addEventListener("mouseout", notHover)
        function setRandomColor() {
            const randumNumm = Math.floor(Math.random() * CSS_COLOR_NAMES.length)
            event.target.style.backgroundColor = CSS_COLOR_NAMES[randumNumm]


        }
    }

    )
}
)
function hover() {
    event.target.style.color = "white"
}
function notHover() {
    event.target.style.color = event.target.style.backgroundColor

}


const CSS_COLOR_NAMES = [
    'brown',
    'red',
    'black',
    'orange',
    'blue',
    'purple',
    'pink',
    'lime'
]