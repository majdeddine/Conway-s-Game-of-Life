(function(exports){

  function Grid(columns,rows){
    this.columns = columns;
    this.rows = rows;
    this.grid = [];
    this._generate();
  }
function random(){
  return Math.random() >0.5 ? 1 : 0;
}
Grid.prototype._generate = function(){
  var arr = [];
  for (var y=0; y<this.rows;y++){
    for(var x=0;x<this.columns;x++){
      arr.push(random());
    }
  }

  while(arr.length) this.grid.push(arr.splice(0,this.rows));
  return this.grid
}

  exports.Grid = Grid;
})(this)
