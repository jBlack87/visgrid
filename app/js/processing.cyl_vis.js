
int dotCount = 0;
int space = 32;
Dot[] dots = new Dot[0];
Vec3D vecDots[] = new Vec3D[0];

int rotateCount = 0;
int radCount = 0;

int PI = Math.PI;
	int radius = 212;
	int radian = PI/180;
	int angle;
	int xof, x, y, z;




void setup()
{
	size($(window).width(), $(window).height(), P3D); 
	smooth();
	noStroke();
	frameRate(60);

       
       
    	
	
	/*
	for(var i = 0; i < dotCount; i++)
	{
	  	x = 200*Math.cos(2 * Math.PI * i / dotCount);//(50 + 100 * Math.cos(2 * Math.PI * i / dotCount));
  		y = 200*Math.sin(2 * Math.PI * i / dotCount);//(50 + 100 * Math.sin(2 * Math.PI * i / dotCount));
	  	z = 200*Math.cos(2 * Math.PI * i / dotCount);//(50 + 100 * Math.cos(2 * Math.PI * i / dotCount));
  	
	  dots[i] = new Dot(x,y,z,i,dots);

	}
	*/
	
	
	for (i=space; i<180; i+=space) {
	
		for (angle=0; angle<360; angle+=space) {

			xof = Math.sin(radian*i)*radius;
			
			x = Math.cos(angle*radian)*xof;
			y = Math.cos(radian*i)*radius;
			z = Math.sin(angle*radian)*xof;

			vecDots[dotCount] = new Vec3D( x, y, z ); 

			//dots[dotCount] = new Dot(x+($(window).width()/2),y+($(window).height()/2),z,dotCount,dots);
			dotCount ++;
		}
	} 	
	
	
}



void draw()
{
	background(0);
	
  for ( int i = 0; i < vecDots.length; i++ ) {
    // this vectors are use to calculate the orientation of the particles
    Vec3D up = new Vec3D( 0, 1, 0 );
    Vec3D tar = vecDots[i].getNormalized();
    Vec3D axis = up.cross( tar );
    axis.normalize();
    
    float angle = acos( up.dot( tar ) );
    
    pushMatrix();
      translate( vecDots[i].x+100, vecDots[i].y+100, vecDots[i].z );
      rotate( angle, axis.x, axis.y, axis.z );
      stroke( 100 );
      line( 0, 0, 0, 20 );
        pushMatrix();
          rotate( Math.PI/2, 1, 0, 0 );
          fill(200);
          point( 100, 100, 0);
        popMatrix();
    popMatrix();
    }	
    
	
}

class Dot {

	dots[] others;
	
	int x,y,z,orig_x,orig_y,orig_z,ID, xangle, XOF;
	

	Dot(int mX, int mY, int mZ,mID,dots[] dotsArray)
	{
		x = mX;
		y = mY;
		z = mZ;
		ID = mID;
		orig_x = mX;
		orig_y = mY;
		orig_z = mZ;
		others = dotsArray;
		xangle = 0;
		
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
		
		
		
			XOF = (Math.sin(radian*xangle)*radius)/2;
			
			//x = Math.cos(angle*radian)*xof;
			//y = Math.cos(radian*i)*radius;
			//z = Math.sin(angle*radian)*xof;
		//translate(($(window).width()/2-400+(400 * Math.cos(2 * Math.PI * ID))),($(window).height()/2+(400 * Math.sin(2 * Math.PI * ID))));

		
		translate(Math.cos(xangle*radian)*XOF,0,Math.sin(xangle*radian)*XOF);
		//rotateY(radians(frameCount));
		
		
		xangle += 1;
		noFill();
		stroke(#00ccff);
		point(x,y,z);
		/*
		if(ID>=1)
		line(others[ID-1].x,others[ID-1].y,x,y);
		else
		line(x,y,others[others.length-1].x,others[others.length-1].y);
		font = loadFont("FFScala-32.vlw"); 
		textFont(font); 
		text(ID, x+5, y+5); 
*/
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



