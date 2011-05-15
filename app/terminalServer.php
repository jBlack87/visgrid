<?php
if (!empty($_POST['input']))
{
	$st = $_POST['input'];

	switch($st)
	{
		case 'numbers':
			print join("\n",array(1,2,3,4,5,6,7,8,9,10));
			break;
		case 'sleep':
			print "sleeping...\n";
			sleep(2);
			print "slept!";
			break;
		case 'run visgrid':
			print "{command:'run_vis_grid', output:'RUNNING VIS GRID 1.0'}";
			
			break;
		case 'run cylvis':
			print "{command:'run_cyl_vis', output:'RUNNING CYL VIS 1.0'}";
			
			break;
		case 'run ram':
			print "{command:'ram', output:'RUNNING RAM 1.0'}";
			
			break;
		case 'run treebuilder':
			print "{command:'run_tree_builder', output:'RUNNING TREE BUILDER 1.0'}";
			
			break;
		
		case 'treebuilder stem':
			print "{command:'tree_builder_new_stem', output:'treebuilder - creating new stem'}";
			
			break;
		
		case 'treebuilder 2dimensions':
			print "{command:'tree_builder_2_dimensions', output:'treebuilder - 2 dimensions active'}";
			
			break;
		
		case 'treebuilder 1dimensions':
			print "{command:'tree_builder_1_dimensions', output:'treebuilder - 1 dimensions active'}";
			
			break;
			
		case 'treebuilder automate':
			print "{command:'tree_builder_automate', output:'treebuilder - automation active'}";
			
			break;
		
		case '-exit':
			print "{command:'exit_program', output:'EXIT PROGRAM - CLEARING MEMORY'}";
			
			break;
		
		case 'error':
			print "{command:'show_error', output:'failed to run'}";			
			break;
		case '-help':
			print "HELP >> COMMANDS:
			
run visgrid - run the vis grid 
run circtrack - run the circtrack visualization 
run touchframe - run touchframe interactive 

run treebuilder - Tree Builder 

treebuilder stem - create new stem 
	
treebuilder 1dimensions - rotate in 1 dimension
	
treebuilder 2dimensions - rotate in 2 dimensions
	
treebuilder automate - autobuild tree
				
-exit - KILL PROGRAM
			
			";			
			break;
		case 'run touchframe':
			print "{command:'run_touch_frame', output:'RUNNING TOUCH FRAME 1.0'}";
			break;
		case 'run circtrack':
			print "{command:'run_circ_track', output:'RUNNING CIRC TRACK 1.0'}";
			break;
		case 'reverse':
		default:
			print "command not found..";
	}
}
else if(!empty($_POST['getData']))
{
	$file = 'projects.txt';
	$content = fopen($file,"r");
	$data = fread($content,filesize($file));
	fclose($content);
	echo $data;
}
else
{
	print 'no command entered';
}
print "\n";
?>
