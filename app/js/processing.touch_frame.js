// global vars



Frame[] frames = new Frame[0]; 
var canX = [];
var canY = [];
var can;


void setup()
{
	size(800, 800); 
	smooth();
	noStroke();
	frameRate(30);
    

	can = document.getElementById("vis_grid");

	can.addEventListener("touchstart", touchDown, false);
    can.addEventListener("touchmove", touchXY, true);
   // can.addEventListener("touchend", touchUp, false);
    
}


void draw()
{
	background(0);

	int numFrames = frames.length;

	for(int i = 0; i < numFrames; i++)
	{
		frames[i].display();
		frames[i].move();
		
 	}
}

///////
//////

function touchDown()
{

	int numFrames = frames.length;
	touchXY();
	frames[numFrames] = new Frame(canX[numFrames-1],canY[numFrames-1],numFrames);
	


}

function mouseDown()
{

	int numFrames = frames.length;
	touchXY();
	frames[numFrames] = new Frame(canX[numFrames-1],canY[numFrames-1],numFrames);
	


}

function touchXY(e) {

    if (!e) e = event;

    e.preventDefault();
	int numFrames = frames.length;
    len = e.targetTouches.length;

    for (i=0; i<len; i++) {

        canX[i] = e.targetTouches[i].pageX - can.offsetLeft;

        canY[i] = e.targetTouches[i].pageY - can.offsetTop;

    }
}
/////
/////



class Frame {

	int x;
	int y;
	int ID;
	float tempxpos, tempypos; 
	
	float mass = 7;       // Mass 
	float k = 0.2;    // Spring constant 
	float damp = 0.98;       // Damping 
	float rest_posx;  // Rest position X 
	float rest_posy;  // Rest position Y 	
	
	float velx = 0.0;   // X Velocity 
	float vely = 0.0;   // Y Velocity 
	float accel = 0;    // Acceleration 
	float force = 0;    // Force 
	

	Frame(int mX, int mY,int mID)
	{
	
		x = mX;
		y = mY;	
		ID = mID;
		rest_posx = mX;
		rest_posy = mY;
	
	}
	
	void move()
	{

		
		rest_posx = mouseX;
		rest_posy = mouseY;
		
		force = -k * (y - rest_posy);  // f=-ky 
		accel = force / mass;                 // Set the acceleration, f=ma == a=f/m 
		vely = damp * (vely + accel);         // Set the velocity 
		y = y + vely;  
	
	
		force = -k * (x - rest_posx);  // f=-ky 
		accel = force / mass;                 // Set the acceleration, f=ma == a=f/m 
		velx = damp * (velx + accel);         // Set the velocity 
		x = x + velx;           // Updated position 
   		
   
   	}
		
	void display()
	{
		noFill();
		stroke(126);
		ellipse(x,y,70,70);
	
	}



}


