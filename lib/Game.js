var defaultGrid = {
  simple: [[0,0,0],[0,1,0],[0,0,0]],
  blinker: [[0,1,0],[0,1,0],[0,1,0]]
}

function Game(grid = defaultGrid.simple){
  this._grid = grid;
  this._newGrid = [];
}

function rules(currentStatus,neighboursStatus){
    if(currentStatus === 1){
      if(neighboursStatus < 2){return 0;}
      else if(neighboursStatus > 3){ return 0;}
      else{return 1;}
    }
    else if( currentStatus === 0 ){

      if(neighboursStatus === 3){return 1;}

      else{return 0;}
    }
}

Game.prototype.grid= function(){
  return this._grid;
}


Game.prototype.countAliveNeighbours= function(i,j){
  var aliveNeighbours= 0;
  for(var y =j-1;y<j+2;y++){
    for(var x = i-1; x<i+2;x++)
    if(this._grid[y]!==undefined&& this._grid[y][x]!==undefined){
      this._grid[y][x]=== 1? aliveNeighbours+=1 : 0 }
  }
  return aliveNeighbours-this._grid[j][i];
}

Game.prototype.currentCell = function(i,j){
  return this._grid[j][i];
}

Game.prototype.nextGenration = function(){
  var arr=[]
  for(var y = 0; y< this._grid.length;y++){
  for (var x = 0 ; x<this._grid[y].length;x++){
    arr.push(rules(this.currentCell(x,y), this.countAliveNeighbours(x,y)))
  }}

 while(arr.length) this._newGrid.push(arr.splice(0,3));
  return this._newGrid;

}

Game.prototype.play = function(grid){
  this._grid  = grid || this._grid;
  return this.nextGenration();
}



module.exports = Game;
