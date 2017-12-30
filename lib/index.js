$(document).ready(function(){
  var grid = new Grid(18,18);
  var game = new Game(grid.grid)
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  var columns = grid.columns;
  var cells = game.grid();
  var rows = grid.rows;
  var tileSize = canvas.height/rows;


  function draw(x,y){
    var tile=cells[y][x];
    if(tile ===1){context.fillStyle="blue";}
    else{context.fillStyle="white";}
    context.fillRect(x * tileSize , y * tileSize, tileSize , tileSize);
    context.strokeRect(x * tileSize , y * tileSize, tileSize , tileSize);
  }

  function drawAll(){

  for (var x=0;x<rows;x++){
    for(var y=0;y<columns;y++){
     draw(x,y);  }
      }
  }

  drawAll();

  function updateCells(){
  context.clearRect(0,0,canvas.height, canvas.width);
  cells = game.play(cells);
  drawAll();
  }


  $("#start").on("click",function(){
    interval = setInterval(updateCells,200);
    $(this).hide();
  })

  $("#stop").on("click",function(){
    clearInterval(interval);
    $("#start").show();
  })

  $(canvas).on("click",function(){
    var x = Math.floor(event.offsetX/tileSize);
	  var y = Math.floor(event.offsetY/tileSize);
    console.log(x)
    cells[y][x]===1? cells[y][x]=0:cells[y][x]=1;
    console.log(y,x);
    draw(x,y)
  })

});
