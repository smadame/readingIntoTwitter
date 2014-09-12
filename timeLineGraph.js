var timeLineData1 = {
	labels: ["January 2014", "February 2014", "March 2014", "April 2014", "May 2014", "June 2014", "July 2014"],
	datasets: [
		{ //data showing how many times OUTLANDER was mentioned each month
			label: "Outlander",
	     	fillColor: "rgba(204,0,102,0.2)",
	      	strokeColor: "rgba(204,0,102,1)",
	        pointColor: "rgba(204,0,102,1)",
	      	pointStrokeColor: "#fff",
	      	pointHighlightFill: "#fff",
	      	pointHighlightStroke: "rgba(204,0,102,1)",
            data: [10, 6, 7, 15, 3, 2, 3]
		},
		{ //data showing how many times LIES was mentioned each month
		    label: "Big Little Lies",
		    fillColor: "rgba(153,0,0,0.2)",
		    strokeColor: "rgba(153,0,0,1)",
		    pointColor: "rgba(153,0,0,1)",
		    pointStrokeColor: "#fff",
		    pointHighlightFill: "#fff",
		    pointHighlightStroke: "rgba(153,0,0,1)",
            data: [7, 4, 2, 1, 2, 1, 0]
		},
		{ //data showing how many times GONE was mentioned each month
     	    label: "Gone Girl",
	        fillColor: "rgba(204,0,0,0.2)",
	        strokeColor: "rgba(204,0,0,1)",
	        pointColor: "rgba(204,0,0,1)",
	        pointStrokeColor: "#fff",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgba(204,0,0,1)",
            data: [21, 25, 16, 15, 13, 6, 4]
		},
		{ //data showing how many times TAKING was mentioned each month
	        label: "Taking It All",
	      	fillColor: "rgba(204,102,0,0.2)",
	        strokeColor: "rgba(204,102,0,1)",
	    	pointColor: "rgba(204,102,0,1)",
	      	pointStrokeColor: "#fff",
	    	pointHighlightFill: "#fff",
	    	pointHighlightStroke: "rgba(204,102,0,1)",
	      	data: [7, 2, 3, 5, 3, 0, 4]
	    },
		{ //data showing how many times SKYE was mentioned each month
      		label: "Dark Skye",
      		fillColor: "rgba(255,102,0,0.2)",
      		strokeColor: "rgba(255,102,0,1)",
      		pointColor: "rgba(255,102,0,1)",
      		pointStrokeColor: "#fff",
      		pointHighlightFill: "#fff",
      		pointHighlightStroke: "rgba(255,102,0,1)",
      		data: [6, 9, 5, 10, 0, 0, 2]
    	}
  	]
};

var timeLineData2 = {
	labels: ["January 2014", "February 2014", "March 2014", "April 2014", "May 2014", "June 2014", "July 2014"],
	datasets: [
	{ //data showing how many times UNBROKEN was mentioned each month
  		    label: "Unbroken",
      		fillColor: "rgba(153,0,255,0.2)",
      		strokeColor: "rgba(153,0,255,1)",
      		pointColor: "rgba(153,0,255,1)",
      		pointStrokeColor: "#fff",
      		pointHighlightFill: "#fff",
      		pointHighlightStroke: "rgba(153,0,255,1)",
            data: [12, 2, 3, 7, 3, 3, 4]
    },
	{ //data showing how many times BOYS was mentioned each month
      		label: "The Boys in the Boat",
      		fillColor: "rgba(102,0,204,0.2)",
	      	strokeColor: "rgba(102,0,204,1)",
	        pointColor: "rgba(102,0,204,1)",
	        pointStrokeColor: "#fff",
	      	pointHighlightFill: "#fff",
	      	pointHighlightStroke: "rgba(102,0,204,1)",
            data: [8, 4, 6, 4, 2, 5, 2]
    },
	{ //data showing how many times AMERICA was mentioned each month
	        label: "America",
      		fillColor: "rgba(51,51,255,0.2)",
      		strokeColor: "rgba(51,51,255,1)",
      		pointColor: "rgba(51,51,255,1)",
      		pointStrokeColor: "#fff",
      		pointHighlightFill: "#fff",
      		pointHighlightStroke: "rgba(51,51,255,1)",
            data: [4, 6, 3, 1, 7, 0, 1]
    },
	{ //data showing how many times HEAVEN was mentioned each month
    	 	label: "Heaven is for Real",
      		fillColor: "rgba(51,204,255,0.2)",
      		strokeColor: "rgba(51,204,255,1)",
      		pointColor: "rgba(51,204,255,1)",
      		pointStrokeColor: "#fff",
      		pointHighlightFill: "#fff",
      		pointHighlightStroke: "rgba(51,204,255,1)",
	      	data: [14, 6, 3, 5, 2, 2, 0]
    },
	{ //data showing how many times FAMILY was mentioned each month
      		label: "The First Family Detail",
      		fillColor: "rgba(0,199,140,0.2)",
      		strokeColor: "rgba(0,199,140,1)",
      		pointColor: "rgba(0,199,140,1)",
      		pointStrokeColor: "#fff",
      		pointHighlightFill: "#fff",
      		pointHighlightStroke: "rgba(0,199,140,1)",
      		data: [13, 8, 1, 7, 14, 3, 1]
    }
  ]
};

var timeLineCtx1 = document.getElementById("canvasTimeLine1").getContext("2d");
window.timeLine1 = new Chart(timeLineCtx1).Line(timeLineData1, {responsive: true});
console.log("time line has been created");

var timeLineCtx2 = document.getElementById("canvasTimeLine2").getContext("2d");
window.timeLine2 = new Chart(timeLineCtx2).Line(timeLineData2, {responsive: true});
console.log("time line has been created");