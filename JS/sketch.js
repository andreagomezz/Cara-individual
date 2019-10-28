let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {

    micLevel = mic.getLevel();

    mov = map(micLevel, 0, 1, 2, 1000);
    
    col1 = map(micLevel, 0, 1, 0, 100);
    col2 = map(micLevel, 0, 1, 100, 155);
    col3 = map(micLevel, 0, 1, 160, 255);

   

    /*oreja izquierda
    fill('#6ABEA7');
    ellipse(width / 2 - 1000, windowHeight / 2 + 50, 350+mov/6, 350+mov/6);
    fill('#04724D');
    ellipse(windowWidth / 2 - 1000, windowHeight / 2 + 50, 200, 200);

    //oreja derecha
    fill('#6ABEA7');
    ellipse(windowWidth / 2 + 1000, windowHeight / 2 + 50, 350+mov/6, 350+mov/6);
    fill('#04724D');
    ellipse(windowWidth / 2 + 1000, windowHeight / 2 + 50, 200, 200);*/

    //antena
    fill(col1*col3,col1+col2-col3,col1*col2+col3);
    ellipse(windowWidth / 2, windowHeight/5, 200, 200); //que cambie el color

    //cara
    fill('#6ABEA7');
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, width-150, 700, 70);

    //ojo izquierdo
    fill("white")
    ellipse(windowWidth / 2 - 250, windowHeight /2, width-800+mov, 200);
    fill("black")
    ellipse(windowWidth / 2 - 250, windowHeight / 2, 150/mov, 150-mov);

    //ojo centro
    fill("white")
    ellipse(windowWidth / 2, windowHeight / 3-100, width-1000+mov, 200);
    fill("black")
    ellipse(windowWidth / 2, windowHeight / 3-100, 150/mov, 150-mov);

    //ojo derecho
    fill("white")
    ellipse(windowWidth / 2 + 250, windowHeight / 2, width-800+mov, 200);
    fill("black")
    ellipse(windowWidth / 2 + 250, windowHeight / 2, 150/mov, 150-mov);
    
    //fons boca
    fill('#8F2D56');
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2 + 300, width-150, 250, 0, 0, 70, 70);
    
    //dents
    fill("white");
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2 + 210, width-150, 90, 0, 0, 70, 70);

    //boca
    fill('#6ABEA7');
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2 + 280+mov*2, width-150, 300, 0, 0, 70, 70);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
    getAudioContext().resume();
}
