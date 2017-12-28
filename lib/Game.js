var defaultGrid = {
  simple: [[0,0,0],[0,1,0],[0,0,0]],
  blinker: [[0,1,0],[0,1,0],[0,1,0]]
}

function Game(grid = defaultGrid.simple){
  this._grid = grid;

}

function rules(currentStatus,neighboursStatus){
    if(currentStatus = 1){
      if(neighboursStatus < 2){return 0;}
      else if(neighboursStatus > 3){ return 0;}
      else{return 1;}
    }
    else if( currentStatus = 0 ){

      if(neighboursStatus === 3){return 1;}

      else{return 0;}
    }
}

Game.prototype.grid= function(){
  return this._grid;
}

Game.prototype.countAliveNeighbours= function(i,j){
  var aliveNeighbours = 0;
  var row = [j-1, j, j+1];
  var column = [i-1, i, i+1];

  for(var x = 0; x< column.length;x++){
    for (var y = 0 ; y<row.length;y++){
      if(this._grid[row[y]] === undefined){}
      else if(this._grid[row[y]][column[x]] === undefined){}
      else if (this._grid[row[y]][column[x]] === 1){
        aliveNeighbours+=1;
      }
    }
  }
  return aliveNeighbours - this._grid[j][i];
}



module.exports = Game;
