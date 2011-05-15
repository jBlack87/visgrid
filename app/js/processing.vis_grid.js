
int timeSeq = 0.1;
int gridCount = 75;
Dot[] dots = new Dot[gridCount];

void setup() {
  size($(window).width(), $(window).height()); 
  smooth();
  noStroke();
  frameRate(30);
  
  kill_program();
  
  $('#console_container').append('<span class="console_line">init visgrid..</span>');
  
  
  
  
  for(int i = 0; i < gridCount; i++)
  {
  	int x = 300;
  	int y = 150;
  	
  	x += (i*15)-50;
  	y += (i*10)/2+150;
  	
  	if(i>15)
  	{
  	
  		x = 380;
  		y = 145;
  	
  		x += ((i-15)*15)+50;
  		y += ((i-15)*10)/2+150;
  	}
  
  	if(i>30)
  	{
  		x = 460;
  		y = 140;
  	
  		x += ((i-30)*15)+50;
  		y += ((i-30)*10)/2+150;
  	}
  
  	if(i>45)
  	{
  		x = 540;
  		y = 135;
  	
  		x += ((i-45)*15)+50;
  		y += ((i-45)*10)/2+150;
  	}
  
  	if(i>60)
  	{
  		x = 620;
  		y = 130;
  	
  		x += ((i-60)*15)+50;
  		y += ((i-60)*10)/2+150;
  	}
  
  	
	  dots[i] = new Dot(x,y,i,dots);
  }
  	
}


//
//	 draw dots
//

void draw() 
{
    background(0);
	for(int i = 0; i < gridCount; i++)
	{
		dots[i].display();
		dots[i].move();
 	}
 	

}



function kill_program()
{
	$('#uplink_trigger').click(function(){
		
		if($('#uplink').attr('rel') == 'general' && $('#uplink').attr('value') == 'exit')
		{
		
  			$('#console_container').append('<span class="console_line">-kill visgrid</span>');
			exit();
		}
	});
}






//
// dot class
//


class Dot {

 
 

// global variables in class

	float x, y,original_x, original_y;
	int id;
	dots[] others;
	float yoff;        // 2nd dimension of perlin noise
	int randNum;
	
	
	Dot(float xin, float yin, int idInt, dots[] dotArray)
	{
	
		x = xin;
		y = yin;
		id = idInt;
		others = dotArray;
		
		randNum = random(8.42);
		
		original_x = x;
		original_y = y;
	}

	void move()
	{

		//y -= others[id+1].y/2;
		int item = id;
		timeSeq +=0.001;
		
		
		
		
			y = original_y+(cos( frameCount/25)*30 * Math.cos(2 * Math.PI * item / (others.length/2)));
		
	}
	
	
	void display()
	{
		
		noFill();
		stroke(126);
		ellipse(x,y,5,5);

		stroke(#0090a1);
		point(x+10*randNum,y+5*randNum);
		point(x+3*randNum,y+9*randNum);
		point(x-20*randNum,y-11*randNum);
		point(x-7*randNum,y+5*randNum);
		
		int item = id+1;
		
		if(item<others.length && item!=16 && item!=31 && item!=46 && item!=61)
		{
			stroke(#0090a1);
			line(x,y,others[item].x,others[item].y);
		}
		if(item+15 < others.length && item!=16 && item!=31 && item!=46 && item!=61)
		{
			line(x,y,others[item+15].x,others[item+15].y);

		}
	}

}