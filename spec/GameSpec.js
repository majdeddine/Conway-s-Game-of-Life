describe("Game",function(){
  var Game = require('../lib/Game');
  var game;
  beforeEach(function(){
     game = new Game();
  });

  it("should return the default grid", function(){
    expect(game.grid()).toEqual([[0,0,0],[0,1,0],[0,0,0]]);
  })

  it("should count the how many neighbours are alive",function(){
    expect(game.countAliveNeighbours(0,0)).toEqual(1);
  })

  it("should count the how many neighbours are alive when the grid is blinker",function(){
    var game = new Game([[0,1,0],[0,1,0],[0,1,0]])
    expect(game.countAliveNeighbours(0,0)).toEqual(2);
  })


})
