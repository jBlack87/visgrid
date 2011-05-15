
int dotCount = 10;
int space = 8;
Dot[] dots = new Dot[0];


int rotateCount = 0;
int radCount = 0;
void setup()
{
	size($(window).width(), $(window).height()); 
	smooth();
	noStroke();
	frameRate(60);

       
       
    int PI = Math.PI;
	int radius = 212;
	int radian = PI/180;
	int angle;
	int xof, x, y, z;
	
	
	
	for(var i = 0; i < dotCount; i++)
	{
	  	x = 200*Math.cos(2 * Math.PI * i / dotCount);//(50 + 100 * Math.cos(2 * Math.PI * i / dotCount));
  		y = 200*Math.sin(2 * Math.PI * i / dotCount);//(50 + 100 * Math.sin(2 * Math.PI * i / dotCount));
  	
  	
	  dots[i] = new Dot(x,y,i,dots);

	}
	
	
	/*
	for (i=space; i<180; i+=space) {
	
		for (angle=0; angle<360; angle+=space) {

			xof = Math.sin(radian*i)*radius;
			
			x = Math.cos(angle*radian)*xof;
			y = Math.cos(radian*i)*radius;
			z = Math.sin(angle*radian)*xof;

			dots[dotCount] = new Dot(x+($(window).width()/2),y+($(window).height()/2),z,dotCount,dots);
			dotCount ++;
		}
	} 	
	
	*/	
	
}



void draw()
{
	background(0);
	
	for(int i = 0;i<dots.length; i++)
	{
		dots[i].display();
		dots[i].move();
		
	
	}
	
	
}

class Dot {

	dots[] others;
	
	int x,y,orig_x,orig_y,ID;
	

	Dot(int mX, int mY,mID,dots[] dotsArray)
	{
		x = mX;
		y = mY;
		ID = mID;
		orig_x = mX;
		orig_y = mY;
		others = dotsArray;
	}
	
	void move()
	{
			  	//x = orig_x / (50+100*Math.cos(2 * Math.PI * frameCount / 360));
  		//y = orig_y / (50+100*Math.sin(2 * Math.PI * frameCount / 360));
	
	
	
	//beginCamera();
	//camera($(window).width()/2, $(window).height()/2, 71.0, $(window).width()/2, $(window).height()/2, -800.0, 0.0, 1.0, 0.0);
	//rotateY(-Math.PI/frameCount);
	//rotateY(rotateCount/10000*-1);
	//rotateX(-PI/frameCount);
	//rotateZ(-PI/frameCount);
	//endCamera();
	//if(rotateCount<360)
	//else
	//rotateCount = 0;
		
	}
	
	void display()
	{
		pushMatrix();
		
		translate(($(window).width()/2-400+(400 * Math.cos(2 * Math.PI * ID))),($(window).height()/2+(400 * Math.sin(2 * Math.PI * ID))));
		rotate(radians(frameCount/4));
		
		noFill();
		stroke(#00ccff);
		ellipse(x,y,10,10);
		if(ID>=1)
		line(others[ID-1].x,others[ID-1].y,x,y);
		else
		line(x,y,others[others.length-1].x,others[others.length-1].y);
		font = loadFont("FFScala-32.vlw"); 
		textFont(font); 
		text(ID, x+5, y+5); 

		popMatrix();

		
		/*
		if(ID>0)
		{
			strokeWeight(0.3);
			line(x,y,others[ID-1].x,others[ID-1].y);
		}
		else
		{
			strokeWeight(0.3);
			line(x,y,others[others.length-1].x,others[others.length-1].y);
		}
		*/
	}

}



