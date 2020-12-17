let container = document.getElementById('container');
let wrapper = document.getElementById('wrapper').appendChild(container);
let grid = 16;
let rainbowClick = false;

//adding rainbow button
let rainbow = document.createElement("button");
rainbow.title = "Rainbow color";
rainbow.innerHTML = "Rainbow";
rainbow.id = "rainbow";
document.getElementById("modifications").appendChild(rainbow);

//clear button created
let clearBtn = document.createElement("button");
clearBtn.title = "Clear";
clearBtn.innerHTML = "Clear";
clearBtn.id = "clear";
document.getElementById("modifications").appendChild(clearBtn);


//clears all the styling if button 'clear' is pressed
clearBtn.addEventListener("click", fucntion=>{
    rainbowClick=false;
    blocks.forEach(block =>{

        block.classList.remove("hover");
        block.removeAttribute("style");
    });
});



//creating grid
for (let i = 0; i < grid; i++ ){
    for (let j = 0; j < grid; j++){
    let gridDiv = document.createElement("div");
    gridDiv.id = "block";
    gridDiv.className = "block";
    document.getElementById('container').appendChild(gridDiv);
    }
}
//turns nodeList into array for use
let nodeBlocks = document.querySelectorAll(".block");
let blocks = [];
for (let i = 0; i < nodeBlocks.length; i++){
    //must be array, thus for loop conversion
    blocks.push(nodeBlocks[i]);
}

function draw(){
//sets varable to true if button clicked then is able to turn it rainbow
    rainbow.addEventListener("click", fucntion=>{
        if (!rainbowClick){
            rainbowClick = true;  
        }
        else {
            rainbowClick=false;
        }  
   
    });
    
        blocks.forEach(block => {          
                
            block.addEventListener("mouseover", mouseOver=>{
                if (rainbowClick){
                    // if rainbow has been clicked, add rainbow
                    let rgb = [Math.floor(Math.random() *256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)]
                    //rbg array with 3 random numbers up to 256
                    block.style.backgroundColor = "rgb("+rgb.join(",")+")";
                }
                else{
                    block.classList.add("hover"); 
                    //adding hover class if mouse is on block
                    // to leave a pixelated trail
                }
            });   
        });
}
draw();