function JSRadar(idname, data) {
	var c = document.getElementById(idname);
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#0000FF";
	var mywidth = c.width;
	var myheight = c.height;
	var centerWidth = c.width/2;
	var centerHeight = c.width/2;
	
	var radius = centerWidth*.25 + centerHeight*.25;
	while(radius > mywidth || radius > myheight) {
		radius = radius*.5;
	}
	ctx.moveTo(centerWidth+radius*Math.cos(0), centerHeight+radius*Math.sin(0));
	var dataCount = data.length;
	for(x=0; x <= dataCount; x++) {
		ctx.lineTo(centerWidth + radius * Math.cos(2*Math.PI*(x/dataCount)), centerHeight + radius * Math.sin(2*Math.PI*(x/dataCount)));
	}
	ctx.stroke();
	ctx.beginPath();
	var maxstuff = -5;
	for(x=0; x < dataCount; x++) {
		if(data[x] > maxstuff) {
			maxstuff = data[x];
		}
	}
	ctx.moveTo(centerWidth + (radius*data[0]/maxstuff)*Math.cos(0), centerHeight+ (radius*data[0]/maxstuff) * Math.sin(0));
	for(x=1; x <= dataCount; x++) {
		ctx.lineTo(centerWidth + (radius*data[x]/maxstuff) * Math.cos(2*Math.PI*(x/dataCount)), centerHeight + (radius*data[x]/maxstuff) * Math.sin(2*Math.PI*(x/dataCount)));
	}
	ctx.closePath();
	ctx.fillStyle = "blue";
	ctx.fill();
}