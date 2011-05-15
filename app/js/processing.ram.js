

Block[] blocks = new Block[0];
ProjectTitle[] projectTitles = new ProjectTitle[0];


projectStatuses = Array();

Stem[] stems = new Stem[0];

var blockCount = Array();
var vertCount = Array();

var stemArray = new Array();



void setup()
{
	size($(window).width(), $(window).height()); 
	smooth();
	noStroke();
	frameRate(60);
	
	/*
	for(int i = 0;i<100; i++)
	{
		
			if(blockCount <20)
				blockCount ++;
			else
			{
				blockCount = 0;
				vertCount +=20;
			}
		
			blocks[i] = new Block(100+(20*blockCount),100+vertCount,blocks,i);
		
		
	}
	*/
	
	
	
	getData();
}






void draw()
{
	background(0);

	for(int i = 0; i < blocks.length; i++)
	{
		blocks[i].display();
		blocks[i].move();
	}

	for(int i = 0; i < projectTitles.length; i++)
	{
		projectTitles[i].display();
		projectTitles[i].move();
	}
	
	for(int i = 0; i < stems.length; i++)
	{
		
		stems[i].display();
		stems[i].move();
		
	}
}


function getData()
{


	$.post('terminalServer.php',{getData:'YES'},function(data){

		var dataObjectx = eval("("+data+")");
		
		//
		for(var i = 0; i < dataObjectx.projects.length; i++)
		{
			blockCount[i] = 0;
			vertCount[i] = 20;

			buildBlock(100,300*(i+1),i,dataObjectx.projects[i]);		

			projectTitles[projectTitles.length] = new ProjectTitle(100,300*(i+1)-50,projectTitles,projectTitles.length, dataObjectx.projects[i]);
			

			stemArray[i] = new Array();
			for(var xx = 0; xx < dataObjectx.projects[i].elements.length; xx++)
			{
							
				stemArray[i][stemArray.length] = dataObjectx.projects[i].elements[xx];
				//projectStatuses[i] = new Stem(100, 300,xx,projectStatuses[i]);
			
			}
			
		}
		//
		for(var i = 0; i < stemArray.length; i++)
		{
			for(var xx = 0; xx < stemArray[i].length; xx++)
			{
				stems[xx+i] = new Stem(($(window).width()/2)+random(300), 100*(xx*i+1)-50,xx+i,stems,stemArray[i][xx]);
				console.log(stemArray[i][xx]);
			}
		}
	});
	



}



function buildBlock(x,y,i,dataObject)
			{
			var mBlockCount = 0;
			var myInterval = setInterval(function(){
				if(mBlockCount < (dataObject.complete))
				{
							
					blocks[blocks.length] = new Block(x+(20*blockCount[i]),y+vertCount[i],blocks,blocks.length);
					mBlockCount ++;
					if(blockCount[i] <((vertCount[i]/2)))
						blockCount[i] ++;
					else
					{
						blockCount[i] = 0;
						vertCount[i] +=20;
					}

				}
				else
				{
					clearInterval(myInterval);
				}

			},30);

			}



class Block 
{
	int x,y,orig_x,orig_y,ID;
	Block[] others;
	int easing = 0.05;
	
	int alpha  = random(100);
	
	
	Block(int mX, int mY,Block[] mOthers,mID)
	{
		x = 1000;
		y = mY;
		orig_x = mX;
		orig_y = mY;
		ID = mID;
		others = mOthers;

	}
	
	void update()
	{

	}
	void display()
	{
	
		fill(#0094a6,alpha);
		noStroke();
		rect(x,y,15,15);
		font = loadFont("FFScala-32.vlw"); 
		
	}
	
	
	void move()
	{
	
		float dx = orig_x - x;
		if(abs(dx) > 1) {
    		x += dx * easing;
    		
  		}
  		//alpha += easing*10;
	
	
	}




}



class ProjectTitle 
{
	int x,y,orig_x,orig_y,ID;
	ProjectTitle[] others;
	int easing = 0.05;
	
	var dataObject;
	
	
	ProjectTitle(int mX, int mY,ProjectTitle[] mOthers,mID,mData)
	{
	
		x = 1000;
		y = mY;
		orig_x = mX;
		orig_y = mY;
		ID = mID;
		others = mOthers;
		dataObject = mData;
	}
	
	void update()
	{

	}
	void display()
	{
	
		fill(#0090a1);		
		
		font = loadFont("FFScala-32.vlw"); 
		textFont(font); 
		textSize(30);
		text(dataObject.title, x+5, y+5); 
		textSize(10);
		text(dataObject.title, x+5, y+25); 
		text(dataObject.deadline, x+5, y+40); 
		
		
		
	}
	
	
	void move()
	{
	
		float dx = orig_x - x;
		if(abs(dx) > 1) {
    		x += dx * easing;
  		}
  		
	
	
	}




}





class Stem {

	int x, y, ID;
	stems[] others;
	
	int original_x, original_y;
	int ranDivider;
	float easing = 0.05;
	var title;
	Stem(int mX, int mY,int mID,stems[] stemArray, mTitle)
	{

		others = stemArray;
		x = 1000;
		y = mY;
		ID = mID;
		
		original_x = mX;
		original_y = mY;
		ranDivider = random(5)+5;
		title = mTitle;
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
		
		textSize(10);
		text(title, x+5, y+25); 
		
		
	}

	void move()
	{
		
  			moveIn = false;
			//x = original_x+((50 + 70 * Math.cos(2 * Math.PI * ID / stems.length+60))/(360));
			x = original_x+(sin( frameCount/360)*150 * Math.sin(2 * Math.PI * ID / (stems.length/2)));
		
			y = original_y+(cos( frameCount/200)*130 * Math.cos(2 * Math.PI * ID / (stems.length/3)));
		
	}

}



