$(document).ready(function(){
	var nStart;
	
	$('#startTime').on('click', function(){
		var start_time = new Date();
		
		 nStart = start_time.getTime();
		
		$('#showMili').html(nStart);
		$('#starttineShow').html(start_time);

	});
	
	
	
	$('#endTime').on('click', function(){
		var end_time = new Date();
		
		var nEnd = end_time.getTime();
		$('#showMiliEnd').html(nEnd);

		
		$('#endtineShow').html(end_time);
		
		
		var milliseconds =  nEnd - nStart;
	//var result = miliSecond/1000;
	
	$('#showTime').html(milliseconds);

		var time = parseMillisecondsIntoReadableTime(milliseconds);

		alert(time);
	
	});
	
	
	function parseMillisecondsIntoReadableTime(milliseconds){
  //Get hours from milliseconds
  var hours = milliseconds / (1000*60*60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

  //Get remainder from minutes and convert to seconds
  var seconds = (minutes - absoluteMinutes) * 60;
  var absoluteSeconds = Math.floor(seconds);
  var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;


  return h + ':' + m + ':' + s;
}



	

	
});