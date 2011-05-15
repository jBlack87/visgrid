jQuery(document).ready(function(){



	nomad.init();

});

var nElement = {};
var nomad = {};



nomad.init = function()
{

	
	nomad.initTerminal();
	nomad.vis_grid();
	

}


nomad.initTerminal = function()
{


	$('#terminal_input_container').terminal('terminalServer.php',{custom_prompt: "NOMAD>", hello_message: 'WELCOME. TYPE -HELP FOR COMMAND LIST'});


}


nomad.checkCommand = function(data){

	switch(data)
	{
	case "run_vis_grid":
	nomad.vis_grid();
	break;
	case "run_touch_frame":
	nomad.touch_frame();
	break;
	case "run_circ_track":
	nomad.circ_track();
	break;
	case "run_tree_builder":
	nomad.tree_builder();
	break;
	case "exit_program":
	nomad.exit_program();
	break;
	case "run_cyl_vis":
	nomad.cyl_vis();
	break;
	case "tree_builder_new_stem":
	
	nomad.treebuilder_new_stem();
	
	break;
	case "tree_builder_1_dimensions":
	
	nomad.tree_builder_1_dimensions();
	
	break;
	case "tree_builder_automate":
	nomad.tree_builder_automate();
	break;
	
	case "tree_builder_2_dimensions":
	
	nomad.tree_builder_2_dimensions();
	
	break;
	case "ram":
	
	nomad.ram();
	
	break;
	default:
	
	break;
	}

}

nomad.treebuilder_new_stem = function()
{

	$('#uplink').attr('value','new_stem');
	$('#uplink').attr('rel','tree_builder');
	
	$('#uplink_trigger').trigger('click');
}


nomad.tree_builder_1_dimensions = function()
{
	$('#uplink').attr('value','1');
	$('#uplink').attr('rel','tree_builder_dim_change');
	
	$('#uplink_trigger').trigger('click');


}


nomad.tree_builder_2_dimensions = function()
{
	$('#uplink').attr('value','2');
	$('#uplink').attr('rel','tree_builder_dim_change');
	
	$('#uplink_trigger').trigger('click');


}

nomad.tree_builder_automate = function()
{
	$('#uplink').attr('value','automate');
	$('#uplink').attr('rel','tree_builder');
	
	$('#uplink_trigger').trigger('click');


}



nomad.exit_program = function()
{
	$('#uplink').attr('value','exit');
	$('#uplink').attr('rel','general');
	
	$('#uplink_trigger').trigger('click');
	
	$('#vis_grid').remove();
	$('#wrapper').append('<canvas id="vis_grid"></canvas>');
	$('#console_container').append('<span class="console_line">NOMAD> PROGRAM EXIT INIT..</span>').delay(5000).append('<span class="console_line">NOMAD>  RESOURCES CLEARED..</span>').delay(1000).append('<span class="console_line">NOMAD>  PROGRAM TERMINATED..</span>');


}



nomad.cyl_vis = function()
{

  var canvas = $('#vis_grid');  
  var vis_script = $('#vis_script');
  //var vis_grid = $('#vis_grid');
  var script = '';

  $.post('js/processing.cyl_vis.js',function(data){
  
    script = data;
    new Processing( canvas[0], script);
 

  });

}

nomad.ram = function()
{

  var canvas = $('#vis_grid');  
  var vis_script = $('#vis_script');
  //var vis_grid = $('#vis_grid');
  var script = '';

  $.post('js/processing.ram.js',function(data){
  
    script = data;
    new Processing( canvas[0], script);
 

  });

}




nomad.vis_grid = function()
{

  var canvas = $('#vis_grid');  
  var vis_script = $('#vis_script');
  //var vis_grid = $('#vis_grid');
  var script = '';

  $.post('js/processing.vis_grid.js',function(data){
  
    script = data;
    new Processing( canvas[0], script);
 

  });

}

nomad.touch_frame = function()
{

	var canvas = $('#vis_grid');  
	var vis_script = $('#vis_script');
	//var vis_grid = $('#vis_grid');
	var script = '';

	$.post('js/processing.touch_frame.js',function(data){
  
		script = data;
		new Processing( canvas[0], script);
 

	});

}

nomad.circ_track = function()
{

	var canvas = $('#vis_grid');  
	var vis_script = $('#vis_script');
	//var vis_grid = $('#vis_grid');
	var script = '';

	$.post('js/processing.circ_track.js',function(data){
  
		script = data;
		new Processing( canvas[0], script);
 

	});



}

nomad.tree_builder = function()
{

	var canvas = $('#vis_grid');  
	var vis_script = $('#vis_script');
	//var vis_grid = $('#vis_grid');
	var script = '';

	$.post('js/processing.tree_builder.js',function(data){
  
		script = data;
		new Processing( canvas[0], script);
 

	});



}

