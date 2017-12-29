describe("Game",function(){
  var Game = require('../lib/Game');
  var game;
  beforeEach(function(){
     game = new Game();
  });

  it("should return the default grid", function(){
    expect(game.grid()).toEqual([[0,0,0],[0,1,0],[0,0,0]]);
  })
  describe("AliveNeighbours",function(){

    it("should return one ",function(){
      expect(game.countAliveNeighbours(0,0)).toEqual(1);
    })

    it("should return two",function(){
      game.play([[0,1,0],[0,1,0],[0,1,0]]);
      expect(game.countAliveNeighbours(0,0)).toEqual(2);
    })

    it("should return three",function(){
      game.play([[0,1,0],[0,1,0],[0,1,0]]);
      expect(game.countAliveNeighbours(0,1)).toEqual(3);
    })
  })

  describe("nextGenration",function(){

     it("live cell with fewer than two live neighbours dies", function(){
       expect(game.play([[1,1,0],[0,0,0],[0,0,0]])).toEqual([[0,0,0],[0,0,0],[0,0,0]])
     })

     it(" live cell with two or three live neighbours lives on to the next generation", function(){
       expect(game.play([[1,1,1],[0,0,0],[0,0,0]])).toEqual([[0,1,0],[0,1,0],[0,0,0]])
     })

     it("live cell with more than three live neighbours dies", function(){
       expect(game.play([[1,0,1],[1,1,1],[1,0,1]])).toEqual([[1,0,1],[1,0,1],[1,0,1]])
     })

     it("dead cell with exactly three live neighbours becomes a live cell", function(){
       expect(game.play([[0,0,0],[1,1,1],[0,0,0]])).toEqual([[0,1,0],[0,1,0],[0,1,0]])
     })
 });

})
