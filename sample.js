
	 	var circle = document.getElementById('circle');
		var ctx = circle.getContext('2d');
		var x = 75,
    	y = 75,
    	radius = 75,
    	startAngle = 0,
    	endAngle = 360,
    	anticlockwise = 0;
    	ctx.beginPath();
		ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		ctx.fillStyle = '#B6B6B6';
		ctx.fill();
