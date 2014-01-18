JSRadar

Summary:

JSRadar is a simple javascript function that takes in data and will render a Radar graph using HTML5
canvas. (Assumes you pass it at LEAST 3 pieces of data) (Demo included in test.html)
(Comes with no warranty of any kind, it's open-source software)

Arguments: 

idname: The id (as a string) of the canvas object you wish to use for the radar graph

data: A javascript array with numberical data associated with the titles array

With this it will output a graph in the canvas that you specify. This has no dependencies, and will work in
any browser that supports Canvas.

Instructions:

1. Include the graph.js (or whatever you need to rename it to) in your html document
2. Call JSRadar in javascript, passing 2 arguments:
	a. The id of your canvas object as a String
	b. An array of numberical data
	
Important Notes:

1. Some width and length combinations may break it, but it finds the width and length of the canvas object and renders based on that so this problem should be minimal
2. It is recommended to create the canvas object, then have the associated javascript below it

Coming Soon:

Rendering titles passed to the function