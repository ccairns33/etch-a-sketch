let container = document.getElementById('container');
let wrapper = document.getElementById('wrapper').appendChild(container);
let grid = 16;
for (let i = 0; i < grid; i++ ){
    for (let j = 0; j < grid; j++){
    let gridDiv = document.createElement("div");
    gridDiv.id = "block";
    gridDiv.className = "block";
    document.getElementById('container').appendChild(gridDiv);
        console.log()
    }
}
