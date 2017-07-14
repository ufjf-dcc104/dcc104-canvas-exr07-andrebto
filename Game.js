var canvas;
var ctx;
var map;
var pc;
var dt;
var images;
var anterior = 0;
var frame = 0;
var endofgame = false;
var win = false;
var time = 15;
var saiu = 0;
var x_final;
var y_final;
var path;
var level = 1;
var time_inicial = 0;
function init(){
  canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = 1280;
  canvas.height = 1280;
  ctx = canvas.getContext("2d");
  path = [];
  images = new ImageLoader();
  images.load("pc","pc.png");
  map = new Map(Math.floor(canvas.height/40), Math.floor(canvas.width/40));
  map.images = images;
  map.setCells([
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]);
  pc = new Sprite();
  pc.x = 80;
  pc.y = 80;
  time_bar = new Sprite();
  pc.images = images;
  generateRandom();
  initControls();
  requestAnimationFrame(passo);
}

function reset(){
    pc.x = 80;
    pc.y = 80;
    path = [];
    map = new Map(Math.floor(canvas.height/40), Math.floor(canvas.width/40));
    map.images = images;
    map.setCells([
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      ]);
      saiu = 0;        
      generateRandom();
      endofgame = false;
      win = false;
      requestAnimationFrame(passo);
}


function passo(t){
  if(!endofgame){
    dt = (t-anterior)/1000;
    requestAnimationFrame(passo);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    var tempo_segundos = Math.floor((+new Date() - time_inicial) / 1000);
    if(time - tempo_segundos <= 0)
      endofgame = true;
    pc.mover(map, dt);
    map.mover(dt);
    map.desenhar(ctx);
    pc.desenhar(ctx);
    anterior = t;
    ctx.font = "10px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(time - tempo_segundos,pc.x-10,pc.y-50);
	ctx.fillText("Level: "+level,10,10);
  }
  else{
    if(win && level < 12) {
       level = level + 1;
       reset();
    }
    else {
      if(!win) {
            ctx.font = "14px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("Voce perdeu",200,200);
      }
      else {
            ctx.font = "14px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("Voce ganhou todos os leveis",200,200);
      }
    }
  }
}

function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d
};

function generateRandom() {
  var y_limite = Math.floor(canvas.height/40);
  y_final = Math.floor((Math.random() * y_limite) + 1);
  y_final = y_final - 1;
  x_final = Math.floor(canvas.width/40);
  x_final = x_final - 1;
  map.cells[1][1] = 1;
  bfs(1,1,y_final,x_final);
  map.cells[y_final][x_final] = 3;
  for(var i = 20; i < path.length; i+=50) {
      map.cells[path[i][0]][path[i][1]] = 6;  
  }
  var new_map = new Map(Math.floor(canvas.height/40)+2, Math.floor(canvas.width/40)+2);
  new_map.images = images;
  for(var i = 0; i < Math.floor(canvas.height/40)+2; ++i) {
    new_map.cells[0][i] = 4;
    new_map.cells[Math.floor(canvas.height/40)+1][i] = 4;
    new_map.cells[i][0] = 4;
    new_map.cells[i][Math.floor(canvas.height/40)+1] = 4;
  }
  for(var i = 1; i <= Math.floor(canvas.height/40); ++i) {
    for(var j = 1; j <= Math.floor(canvas.height/40); ++j) {
      new_map.cells[i][j] = map.cells[i-1][j-1]; 
    }
  }
  map = new_map;
  var value = Math.floor(canvas.width/40) * Math.floor(canvas.height/40);
  console.log(value);
  if(path.length > 0.5*value)
    reset();
  time_inicial = +new Date();
}

function bfs(x,y,y_final,x_final) {
    map.cells[y][x] = 1;
    path.push([y,x]);
    if(y == y_final && x == x_final) {
      saiu = 1;
    }
    else {
      var min_x = Math.max(0,x-1);
      var max_x = Math.min(Math.floor(canvas.width/40)-1,x+1);
      var min_y = Math.max(0,y-1);
      var max_y = Math.min(Math.floor(canvas.height/40)-1,y+1);
      var vizinhos = [];

      for(var k = y; k >= min_y; --k){
				var viz = [k,x];
        vizinhos.push(viz);
			}
			for(var k = y + 1; k <= max_y; ++k){
        var viz = [k,x];
        vizinhos.push(viz);
			}
			for(var k = x; k >= min_x; --k){
        var viz = [y,k];
        vizinhos.push(viz);
			}
			for(var k = x + 1; k <= max_x; ++k){
        var viz = [y,k];
        vizinhos.push(viz);
			}

      var z = shuffleArray(vizinhos);
        for (var i = 0; i < z.length; ++i){
        if(z[i][0] == y_final && z[i][1] == x_final){
          map.cells[z[i][0]][z[i][1]] == 1;
          saiu = 1;
        }
        if(map.cells[z[i][0]][z[i][1]] != 1 && saiu == 0) {
          bfs(z[i][1],z[i][0],y_final,x_final);  
        }
      }
    }
}


function initControls(){
  addEventListener('keydown', function(e){
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 37:
	      pc.vy = 0;
        pc.vx = -100;
        pc.pose = 2;
        e.preventDefault();
        break;
      case 38:
	      pc.vx = 0;
        pc.vy = -100;
        pc.pose = 3;
        e.preventDefault();
        break;
      case 39:
	      pc.vy = 0;
        pc.vx = 100;
        pc.pose = 0;
        e.preventDefault();
        break;
      case 40:
	      pc.vx = 0;
        pc.vy = 100;
        pc.pose = 1;
        e.preventDefault();
        break;
      default:

    }
  });
  addEventListener('keyup', function(e){
    switch (e.keyCode) {
      case 37:
      case 39:
        pc.vx = 0;
        pc.pose = 4;
        break;
      case 38:
      case 40:
        pc.vy = 0;
        break;
      default:

    }
  });
}
