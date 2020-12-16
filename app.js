let container = document.getElementById('container');
let wrapper = document.getElementById('wrapper').appendChild(container);
let grid = 16;
let rainbowClick = false;

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
//adding rainbow button
let rainbow = document.createElement("button");
rainbow.title = "Rainbow color";
rainbow.innerHTML = "Rainbow";
rainbow.id = "rainbow";
document.getElementById("modifications").appendChild(rainbow);


//creating grid
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
rainbow.addEventListener("click", fucntion=>{
    rainbowClick = true;    
   
});

function draw(){
//default coloring action when mousing over
    console.log(rainbowClick);
    //array necessary
    
        blocks.forEach(block => {
            if (rainbowClick){
            //console.log("rgb("+rgb.join(",")+")");
            block.addEventListener("mouseover", mouseOver =>{
                let rgb = [Math.floor(Math.random() *256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)]
                //rbg array with 3 random numbers up to 256
                block.style.backgroundColor = "rgb("+rgb.join(",")+")";
            });
            }
            else {
        
                block.addEventListener("mouseover", mouseOver=>{
                block.classList.add("hover"); 
                //adding hover class if mouse is on block
                // to leave a pixelated trail
        
                });
            }
    });

}

draw();