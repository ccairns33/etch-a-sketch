let container = document.getElementById('container');
let wrapper = document.getElementById('wrapper').appendChild(container);
let grid = 16;
for (let i = 0; i < grid; i++ ){
    for (let j = 0; j < grid; j++){
    let gridDiv = document.createElement("div");
    gridDiv.id = "block";
    gridDiv.className = "block";
    document.getElementById('container').appendChild(gridDiv);
    }
}
let nodeBlocks = document.querySelectorAll(".block");
let blocks = [];
for (let i = 0; i < nodeBlocks.length; i++){
    //must be array, thus for loop conversion
    blocks.push(nodeBlocks[i]);
}
blocks.forEach(block => {
    //array necessary
    block.addEventListener("mouseover", mouseOver=>{
        block.classList.add("hover"); 
        //adding hover class if mouse is on block
        // to leave a pixelated trail
        
    });
});

let clearBtn = document.createElement("button");
clearBtn.title = "Clear";
clearBtn.innerHTML = "Clear";
clearBtn.id = "clear";
document.getElementById("modifications").appendChild(clearBtn);

clearBtn.addEventListener("click", fucntion=>{
    blocks.forEach(block =>{
        block.classList.remove("hover");
    });
});