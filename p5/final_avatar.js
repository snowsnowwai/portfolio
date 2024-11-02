function setup() {
createCanvas(1000,1000)
background(151, 145, 131)
}

function draw() {
// hair
strokeWeight(0);
fill(45, 19, 12);
stroke(0, 0, 0);

//curved rectangular hair
arc(500, 400, 440, 460, PI, 0, CHORD); 
rect(280, 400, 440, 275);

//line covering the intersecting arc and rect stroke lines
stroke(45, 19, 12); 
rect(282, 399, 436, 3);

//head
// stroke(0, 0, 0);
fill(243, 206, 176);
arc(500, 400, 400, 400, 0, PI, CHORD);

strokeWeight(3);
// rect(335, 425, 150, 80); //rect glasses
// rect(515, 425, 150, 80);
//glasses
ellipse(405, 485, 150, 70);
ellipse(595, 485, 150, 70);
line(482, 485, 518, 485);

//mouth
strokeWeight(4);
fill(0, 0, 0);
arc(500, 575, 20, 10, PI, 0, CHORD);

//eyes
strokeWeight(2);
arc(410, 475, 100, 30, 0, PI, CHORD);
arc(590, 475, 100, 30, 0, PI, CHORD);

//hands
strokeWeight(0);
fill(243, 206, 176);
ellipse(300, 560, 60, 60);
ellipse(700, 560, 60, 60);

//feet
strokeWeight(2);
fill(243, 206, 176);
ellipse(410, 640, 45, 45);
ellipse(590, 640, 45, 45);

//bangs border
// stroke(0, 0, 0);
// line(303, 400, 697, 400);
}

// function draw() {
//     fill(45, 19, 12); //hair
//     stroke(0, 0, 0);
//     strokeWeight(2);
//     arc(500, 500, 240, 260, PI, 0, CHORD); //curved rectangular hair
//     rect(380, 500, 240, 110);
    
//     stroke(45, 19, 12); //line covering the intersecting arc and rect stroke lines
//     rect(382, 499, 236, 3);
    
//     stroke(0, 0, 0); //head
//     fill(243, 206, 176);
//     arc(500, 500, 200, 200, 0, PI, CHORD);
    
//     rect(415, 510, 75, 40); //rect glasses
//     rect(510, 510, 75, 40);
//     line(490, 525, 510, 525);
    
//     fill(0, 0, 0); //mouth
//     arc(500, 575, 20, 10, PI, 0, CHORD);
    
//     arc(450, 525, 50, 15, 0, PI, CHORD); //eyes
//     arc(550, 525, 50, 15, 0, PI, CHORD);
    
//     fill(243, 206, 176); //hands
//     ellipse(385, 560, 40, 40);
//     ellipse(615, 560, 40, 40);
    
//     strokeWeight(2);
//     fill(243, 206, 176); //feet
//     ellipse(460, 620, 35, 35);
//     ellipse(540, 620, 35, 35);
    
//     fill(45, 19, 12); //bangs
//     snoStroke();
//     arc(300, 300, 200, 200, PI, 0, CHORD);
    
//     stroke(0, 0, 0); //bangs border
//     line(150, 300, 300, 300);
//     }