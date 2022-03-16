let zombies = [];
function setup() {
  createCanvas(400, 400);
  for(let a=0;a<12;a++){
    zombies.push(new Mover());
  }
}

function draw() {
  background(186,255,201);
  for(let a=0;a<zombies.length;a++){
    zombies[a].gerak();
    zombies[a].tampil();
    zombies[a].cekBatas();
  }
}
class Mover{
  constructor(){
    this.lokasi = createVector(random(width),random(height));
    this.kecepatan = createVector(0,0);
    this.percepatan = createVector(0.01,-0.01);
  }
  tampil(){
    noStroke();
    fill(255,179,186);
    ellipse(this.lokasi.x,this.lokasi.y,10,10)
  }
  gerak(){
    var mouse = createVector(mouseX,mouseY);
    var arahMouse = p5.Vector.sub(mouse,this.lokasi);
    var topSpeed = 10;
    
    arahMouse.normalize();
    arahMouse.mult(0.5);
    
    this.kecepatan.add(this.percepatan);
    this.kecepatan.add(arahMouse);
    this.kecepatan.limit(topSpeed);
    this.lokasi.add(this.kecepatan);
  }
  cekUjung(){
    if(this.lokasi.x>windowWidth){
      this.lokasi.x=0
    }
    else if(this.lokasi.x<0){
      this.lokasiX.x=windowWidth;
    }
    if(this.lokasi.y>windowWidth){
      this.lokasi.y=0
    }
    else if(this.lokasi.y<0){
      this.lokasiY.y=windowWidth;
    }
  }
  cekBatas(){
    if(this.lokasi.x<0||this.lokasi.x>width){
      this.kecepatan.x=-1*this.kecepatan.x
    }
    else if(this.lokasi.y<0||this.lokasi.y>height){
      this.kecepatan.y=-1*this.kecepatan.y
    }
  }
}