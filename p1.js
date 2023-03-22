let playerstate="idle";
const dropdown=document.getElementById("animations");
dropdown.addEventListener('change',function(e){
    playerstate=e.target.value;
})
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext("2d");

const canvas_width=canvas.width=600;
const canvas_height=canvas.height=600;
const playerImage= new Image();
playerImage.src="shadow_dog.png"
const spritewidth=575;//dimension of 1 image
const spriteheight=523;

let gameframe=0;
const staggerframes=5;

const spriteanimations=[];
const animationstate=[
    {
        name:'idle',
        frames:7,
    },
    {
        name:'jump',
        frames:7,
    },
    {
        name:'fall',
        frames:7,
    },
    {
        name:'run',
        frames:9,
    },
    {
        name:'dizzy',
        frames:11,
    },
    {
        name:'sit',
        frames:5,
    },
    {
        name:'roll',
        frames:7,
    },
    {
        name:'bite',
        frames:7,
    },
    {
        name:'ko',
        frames:12,
    },
    {
        name:'gethit',
        frames:4,
    }
];
animationstate.forEach((state,index)=>{
    let frames={
        loc: [],
    }
    for(let j=0;j< state.frames;j++){
        let positionX=j*spritewidth;
        let positionY=index*spriteheight;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteanimations[state.name]=frames;
});
console.log(spriteanimations);

//this is method 1
function animate(){
    ctx.clearRect(0,0,canvas_width,canvas_height);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw ,dh) s:source d:destination
    let position=Math.floor(gameframe/staggerframes)%spriteanimations[playerstate].loc.length;//{math.floor is used to get whole answer only like 0.2 will be 0}
    let frameX=position*spritewidth;
    let frameY=spriteanimations[playerstate].loc[position].y;

    ctx.drawImage(playerImage,frameX,frameY,spritewidth,spriteheight,0,0,spritewidth,spriteheight);
 
   gameframe++;
    requestAnimationFrame(animate);

};
animate();
  
    

