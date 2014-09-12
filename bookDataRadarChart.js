//OUTLANDER = Outlander
//LIES = Big Little Lies
//GONE = Gone Girls
//TAKING = Taking It All
//SKYE = Dark Skye
//UNBROKEN = Unbroken
//BOYS = The Boys in the Boat
//AMERICA = America
//HEAVEN = Heaven is For Real
//FAMILY = The First Family Detail


var radarBookData1 = {
  labels: ["Tweets","Retweets","Favorites"],
  datasets: [
    { //1st object (dataset) in the list
      label: "Outlander",
      fillColor: "rgba(204,0,102,0.2)",
      strokeColor: "rgba(204,0,102,1)",
      pointColor: "rgba(204,0,102,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(204,0,102,1)",
      data: [tweetsOutlander.length,retweetsOutlander.length,favoritesOutlander.length]
    },
    { //2nd object (dataset) in the list
      label: "Big Little Lies",
      fillColor: "rgba(153,0,0,0.2)",
      strokeColor: "rgba(153,0,0,1)",
      pointColor: "rgba(153,0,0,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(153,0,0,1)",
      data: [tweetsLies.length,retweetsLies.length,favoritesLies.length]
    },
    { //3rd object (dataset) in the list
      label: "Gone Girl",
      fillColor: "rgba(204,0,0,0.2)",
      strokeColor: "rgba(204,0,0,1)",
      pointColor: "rgba(204,0,0,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(204,0,0,1)",
      data: [tweetsGone.length,retweetsGone.length,favoritesGone.length]
    },
    { //4th object (dataset) in the list
      label: "Taking It All",
      fillColor: "rgba(204,102,0,0.2)",
      strokeColor: "rgba(204,102,0,1)",
      pointColor: "rgba(204,102,0,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(204,102,0,1)",
      data: [tweetsTaking.length,retweetsTaking.length,favoritesTaking.length]
    },
    { //5th object (dataset) in the list
      label: "Dark Skye",
      fillColor: "rgba(255,102,0,0.2)",
      strokeColor: "rgba(255,102,0,1)",
      pointColor: "rgba(255,102,0,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(255,102,0,1)",
      data: [tweetsSkye.length,retweetsSkye.length,favoritesSkye.length]
    }
  ]
};

var radarBookData2 = {
  labels: ["Tweets","Retweets","Favorites"],
  datasets: [
    { //6th object (dataset) in the list
      label: "Unbroken",
      fillColor: "rgba(153,0,255,0.2)",
      strokeColor: "rgba(153,0,255,1)",
      pointColor: "rgba(153,0,255,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(153,0,255,1)",
      data: [tweetsUnbroken.length,retweetsUnbroken.length,favoritesUnbroken.length]
    },
    { //7th object (dataset) in the list
      label: "The Boys in the Boat",
      fillColor: "rgba(102,0,204,0.2)",
      strokeColor: "rgba(102,0,204,1)",
      pointColor: "rgba(102,0,204,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(102,0,204,1)",
      data: [tweetsBoys.length,retweetsBoys.length,favoritesBoys.length]
    },
    { //8th object (dataset) in the list
      label: "America",
      fillColor: "rgba(51,51,255,0.2)",
      strokeColor: "rgba(51,51,255,1)",
      pointColor: "rgba(51,51,255,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(51,51,255,1)",
      data: [tweetsAmerica.length,retweetsAmerica.length,favoritesAmerica.length]
    },
    { //9th object (dataset) in the list
      label: "Heaven is for Real",
      fillColor: "rgba(51,204,255,0.2)",
      strokeColor: "rgba(51,204,255,1)",
      pointColor: "rgba(51,204,255,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(51,204,255,1)",
      data: [tweetsHeaven.length,retweetsHeaven.length,favoritesHeaven.length]
    },
    { //10th object (dataset) in the list
      label: "The First Family Detail",
      fillColor: "rgba(0,199,140,0.2)",
      strokeColor: "rgba(0,199,140,1)",
      pointColor: "rgba(0,199,140,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(0,199,140,1)",
      data: [tweetsFamily.length,retweetsFamily.length,favoritesFamily.length]
    }
  ]
};

var bookDataCtx1 = document.getElementById("canvasRadarBookData1").getContext("2d");
window.bookDataRadar1 = new Chart(bookDataCtx1).Radar(radarBookData1, {
  responsive: true,
  animationSteps: 10,
});
console.log("book data radar chart has been created");

var bookDataCtx2 = document.getElementById("canvasRadarBookData2").getContext("2d");
window.bookDataRadar2 = new Chart(bookDataCtx2).Radar(radarBookData2, {
  responsive: true,
  animationSteps: 10,
});
console.log("book data radar chart has been created");