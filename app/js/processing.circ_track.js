
int timeSeq = 0.1;
int gridCount = 60;
Dot[] dots = new Dot[gridCount];

void setup() {
  size($(window).width(), $(window).height()); 
  smooth();
  noStroke();
  frameRate(30);
  kill_program();
  
  $('#console_container').append('<span class="console_line">loading processing algorithm</span>');
  $('#console_container').append('<span class="console_line"> X/loc:'+dots[2].x+'</span>');
  
  
  for(int i = 0; i < gridCount; i++)
  {
  	int x = 100;
  	int y = 150;
  	
  	//x += (i*15)-50;
  	//y += (i*10)/2+150;
  	

  	x = 400+(50 + 100 * Math.cos(2 * Math.PI * i / gridCount));
  	y = 400+(50 + 50 * Math.sin(2 * Math.PI * i / gridCount));
  	
  	
	  dots[i] = new Dot(x,y,i,dots);
  }
  	
  	
    for(int i = gridCount; i < gridCount+60; i++)
  {
  	int x = 100;
  	int y = 150;
  	
  	//x += (i*15)-50;
  	//y += (i*10)/2+150;
  	

  	x = 200+(50 + 70 * Math.cos(2 * Math.PI * i / gridCount+60));
  	y = 200+(50 + 30 * Math.sin(2 * Math.PI * i / gridCount+60));
  	
  	
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
		
  			$('#console_container').append('<span class="console_line">-kill circtrack</span>');
			exit();
			
		}
	});
}




//
// dot class
//


class Dot {

 
 

// global variables in class

	float x, y;
	int id;
	dots[] others;
	float yoff;        // 2nd dimension of perlin noise

	
	
	Dot(float xin, float yin, int idInt, dots[] dotArray)
	{
	
		x = xin;
		y = yin;
		id = idInt;
		others = dotArray;
	}

	void move()
	{

		//y -= others[id+1].y/2;
		int item = id;
		timeSeq +=0.001;
		
		if(item < others.length)
		{
			if(item == 1)
			{
				item = 0;
			}	
			
			
			//	y = ((others[item].y*(item/50)) * sin( frameCount / 55)/2)+250;
						
			
			//x = ((others[item].x*(item/80)) * cos( frameCount / 35)/2)+250;
			
			if(item < 30)
			{
				x =  $(window).width()/2.5+(sin( frameCount/50)*200 * Math.cos(2 * Math.PI * item / (gridCount/2)));
  				y = $(window).height()/2.5+(sin( frameCount/100)*200 * Math.sin(2 * Math.PI * item / (gridCount/2)));
			}
			else
			{
				x =  $(window).width()/2.5+(sin( frameCount/100)*200 * Math.cos(2 * Math.PI * item / (gridCount/2)));
  				y = $(window).height()/2.5+(sin( frameCount/200)*200 * Math.sin(2 * Math.PI * item / (gridCount/2)));
			
			}
			
		}	



	}
	
	
	void display()
	{
		
		noFill();
		stroke(126);
		ellipse(x,y,5,5);

		
		
		int item = id+1;
		
		
			
		var reminder = 1;
		
		
		if(item<others.length && item != 30 && item !=60)
		{
			stroke(#0090a1);
			line(x,y,others[item].x,others[item].y);
			
			
			if(item >=0)
			{
			
				reminder = item % 2;

				if(reminder == 0 && item <30)
				{

					int Sx =  $(window).width()/2.5+(sin( frameCount/50)*230 * Math.cos(2 * Math.PI * item / (gridCount/2)));
  					int Sy = $(window).height()/2.5+(sin( frameCount/100)*230 * Math.sin(2 * Math.PI * item / (gridCount/2)));
				
					stroke(#00ccff);
					line(x,y,Sx,Sy);
					
					ellipse(Sx,Sy,5,5);
					font = loadFont("FFScala-32.vlw"); 
					textFont(font); 
					text(random(5), Sx+5, Sy+5); 
					fill(#00ccff, 50);
				}
			}
		}
		else if(item == 30)
		{
			stroke(#0090a1);
			line(x,y,others[0].x,others[0].y);
			
		}
		else if(item == 60)
		{
			stroke(#0090a1);
			line(x,y,others[30].x,others[30].y);
		}
	}

}