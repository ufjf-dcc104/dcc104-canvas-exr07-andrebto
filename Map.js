function Map(rows, collumns) {
  this.SIZE = 32;
  this.enemies = [];
  this.cells = [];
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < collumns; c++) {
      this.cells[r][c] = 0;
    }
  }
}

Map.prototype.desenhar = function (ctx) {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==1){
        ctx.fillStyle = "brown";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      else if(this.cells[r][c]==0) {
      	ctx.fillStyle = "gray";
	      ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      else if(this.cells[r][c]==3) {
      	ctx.fillStyle = "green";
	      ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      else if(this.cells[r][c] == 4) {
      	ctx.fillStyle = "black";
	      ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      else {
      	ctx.fillStyle = "brown";
	      ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.fillStyle = "yellow";
  	    ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE/2, this.SIZE/2);
      }
    }
  }
};

Map.prototype.setCells = function (newCells) {
  for (var i = 0; i < newCells.length; i++) {
    for (var j = 0; j < newCells[i].length; j++) {
	this.cells[i][j] = newCells[i][j];
    }
  }
};

Map.prototype.mover = function (dt) {
};
