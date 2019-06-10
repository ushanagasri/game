map=[[1,1,1],
     [1,1,1],
     [1,1,1]];
var secs=20;
var choices=3;
var c=0;
function create(){
     document.getElementById('row1').innerHTML="";
for(var i=0;i<map.length;i++){
    for(var j=0;j<map[i].length;j++){
        if(map[i][j]===0){
            document.getElementById('row1').innerHTML+="<div class='card__face--back '></div>";
        }
        else if(map[i][j]===1){
            document.getElementById('row1').innerHTML+="<div class='card__face--front '></div>";
        }
        else if(map[i][j]===10){
            document.getElementById('row1').innerHTML+="<div class='card__face--find '></div>";
        }
   
    }
document.getElementById('score').innerHTML="<div id='score'>-->CHANCES LEFT</div>"+choices;
document.getElementById('time').innerHTML="<div id='time'>s left</div>"+secs;
 
    document.getElementById('row1').innerHTML+="<br>";
}
     }
var a=0;
var b=0;
function newcreate(){
    create();
map=[[1,1,1],
 
     [1,1,1],
 
     [1,1,1]]
choices=3;
c=0;
secs=20;
a= Math.floor(Math.random() * 3);
b = Math.floor(Math.random() * 3);
//map[a][b]=10;
timer();
 
create();
}
newcreate();
var x=0;
var y=0;
var c=0;
row1.addEventListener("click", getClickPosition, false);
function getClickPosition(e){
    x = e.clientX;
    y = e.clientY;
    c=c+1;
    if(c>3){
         alert("gameover");
         newcreate();
       
         
      }else{
    console.log(x,y);
    if((x <100 && y<100)&&(x>=0 && y>=0)){
        x=0;y=0;
    }else if((x <100 && y<200)&&(x>=0 && y>=100)){
        x=1;y=0;
   }else if((x <300 && y<100)&&(x>=200 && y>=0)){
        x=0;y=2;
}else if((x <200 && y<100)&&(x>=100 && y>=0)){
        x=0;y=1;
    }else if((x <200 && y<200)&&(x>=100 && y>=100)){
       x=1;y=1;
    }else if((x <300 && y<200)&&(x>=200 && y>=100)){
        x=1;y=2;
    }else if((x <100 && y<300)&&(x>=0 && y>=200)){
        x=2;y=0;
    }else if((x <200 && y<300)&&(x>=100 && y>=200)){
        x=2;y=1;
    }else if((x <300 && y<300)&&(x>=200 && y>=200)){
        x=2;y=2;
    }
    if(x===a && y===b){
      map[x][y]=10;
      chance();
      create();
     winner();
     c=4;
   //  secs=20;
    // newcreate();
    }
    else{
    map[x][y]=0;
   chance();
 
    if(c<4){
       // tryagain();
    }
create();
}
}
}
function gameover(){
if(map[x][y]===10){
//  create();
c=4;
}
}
 
function winner(){
if(map[x][y]===10){
alert("u win");
c=4;
}
// newcreate();
gameover();
// alert("gameover");
 
}
 
function tryagain(){
if(map[x][y]===0){
alert("try again");
}
}
function chance(){
  
        choices=choices-1;
   
 
}
function timer() {
    var id = setInterval(function timer(){
        secs--;
        create();
      if(secs===0 ){
        clearInterval(id);
        alert("Time's up!");
        c=4;
        secs=20;
       }
else if(secs>0 && c>2){
   clearInterval(id);
    c=4;
}
    }, 1000);
}  
 
 