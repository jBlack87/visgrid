

// global vars
int stemCount = 3;
Stem[] stems = new Stem[stemCount];

int numDimensions = 1;

void setup()
{

  $('#console_container').append('<span class="console_line">loading Tree metaform..</span>');


	size($(window).width(), $(window).height()); 
	smooth();
	noStroke();
	frameRate(30);
	// check for new stem command
	new_stem();
	// check for dimension change command
	dim_change();
	// check for automate command
	automate();
	//kill program
	kill_program();
	var reminder = 1;

 for(int i = 0; i < stemCount; i++)
  {
  	int x = 400;
  	int y = 700;
  	
  	//x += (i*15)-50;
  	//y += (i*10)/2+150;
  	
	if(i!=0)
	{
		reminder = i % 2;

		if(reminder == 0)
		{

  			x = stems[i-1].x+random(50);
  			y = stems[i-1].y-random(50); 
  		}
  		else
  		{
  			x = stems[i-1].x-random(50);
  			y = stems[i-1].y-random(50); 
  		}
  	}
  	
	  stems[i] = new Stem(x,y,i,stems);
  }

}


void draw()
{
	background(0);
	for(int i = 0; i < stems.length; i++)
	{
		stems[i].display();
		stems[i].move();
	}
	
	
}



function kill_program()
{
	$('#uplink_trigger').click(function(){
		
		if($('#uplink').attr('rel') == 'general' && $('#uplink').attr('value') == 'exit')
		{
		
  			$('#console_container').append('<span class="console_line">-kill treebuilder</span>');
			exit();
		}
	});
}





function new_stem()
{
	$('#uplink_trigger').click(function(){
		
		if($('#uplink').attr('rel') == 'tree_builder' && $('#uplink').attr('value') == 'new_stem')
		{
			int i = stems.length;
			
			if(i!=0)
			{
				reminder = i % 2;

				if(reminder == 0)
				{
				
					x = stems[i-1].x+random(50);
					y = stems[i-1].y-random(50); 
				}
  				else
  				{

  					x = stems[i-1].x-random(50);
  					y = stems[i-1].y-random(50); 
  				}
  			}
  			$('#console_container').append('<span class="console_line">new tree stem created at x:'+x+' Y:'+y+'</span>');
			stems[i] = new Stem(x,y,i,stems);
		}
	});
}


function dim_change()
{
	$('#uplink_trigger').click(function(){


		if($('#uplink').attr('rel') == 'tree_builder_dim_change' && $('#uplink').attr('value') == 1)
		{
  			$('#console_container').append('<span class="console_line">treebuilder dimensional rotation set to:1</span>');
			numDimensions = 1;
		}
		else if($('#uplink').attr('rel') == 'tree_builder_dim_change' && $('#uplink').attr('value') == 2)
		{
  			$('#console_container').append('<span class="console_line">treebuilder dimensional rotation set to:2</span>');
			numDimensions = 2;
		}
	});
}





function automate()
{
	$('#uplink_trigger').click(function(){
  		
		
		if($('#uplink').attr('rel') == 'tree_builder' && $('#uplink').attr('value') == 'automate')
		{
  			$('#console_container').append('<span class="console_line">treebuilder automation initiated..</span>');
			setInterval(function(){
			
			
			int i = stems.length;
		
			if(i!=0)
			{
				reminder = i % 2;

				if(reminder == 0)
				{
				
					x = stems[i-1].x+random(50);
					y = stems[i-1].y-random(50); 
				}
  				else
  				{

  					x = stems[i-1].x-random(50);
  					y = stems[i-1].y-random(50); 
  				}
  			}
  			$('#console_container').append('<span class="console_line">automated tree stem created at x:'+x+' Y:'+y+'</span>');
			stems[i] = new Stem(x,y,i,stems);

			
			
			},3000);
		}
		
		
		
	});
}



class Stem {

	int x, y, ID;
	stems[] others;
	
	int original_x, original_y;
	int ranDivider;

	Stem(int mX, int mY,int mID,stems[] stemArray)
	{
		others = stemArray;
		x = mX;
		y = mY;
		ID = mID;
		
		original_x = mX;
		original_y = mY;
		ranDivider = random(10);
	}
	
	void display()
	{
		stroke(#00ccff);
		noFill();
		ellipse(x,y,ranDivider*2+5,ranDivider*2+5);
		
		var reminder = 1;
		
		if(ID>1)
		{
			reminder = ID % 2;

			if(reminder == 0)
			{
				stroke(#0090a1);
				//line(x,y,others[ID-2].x,others[ID-2].y);
				
				int xDif = x-(x/ranDivider);
				int yDif = y-(y/ranDivider);
				int xDif2 = others[ID-2].x+(x/ranDivider);
				int yDif2 = others[ID-2].y-(y/ranDivider);
				
				bezier(x, y, xDif, yDif, xDif2, yDif2, others[ID-2].x, others[ID-2].y);
			
			
			}
			else
			{
				stroke(#0090a1);
				int xDif = x-(x/10);
				int yDif = y-(y/10);
				int xDif2 = others[ID-2].x+(x/ranDivider);
				int yDif2 = others[ID-2].y-(y/ranDivider);
				
				bezier(x, y, xDif, yDif, xDif2, yDif2, others[ID-2].x, others[ID-2].y);
			
			}
		}
		else if(ID == 0)
		{
			stroke(#0090a1);
			int xDif = x-(x/ranDivider);
			int yDif = y-(y/ranDivider);
			int xDif2 = others[ID+1].x+(x/ranDivider);
			int yDif2 = others[ID+1].y-(y/ranDivider);
				
			bezier(x, y, xDif, yDif, xDif2, yDif2, others[ID+1].x, others[+1].y);
			
		}
		
	}

	void move()
	{
		//x = original_x+((50 + 70 * Math.cos(2 * Math.PI * ID / stems.length+60))/(360));
		x = original_x+(sin( frameCount/36)*150 * Math.sin(2 * Math.PI * ID / (stems.length/2)));
		if(numDimensions ==2)
		{
			y = original_y+(cos( frameCount/36)*150 * Math.cos(2 * Math.PI * ID / (stems.length/2)));
		}
	}

}