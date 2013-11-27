// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white',
	layout: "vertical"
});

var label1 = Ti.UI.createLabel({
	text: "lakdsjflkajsdlfkja;lskdjfdlkfjalskdjflkasjdlfkjlakdsjflkja",
	font: {fontSize: "15dp"},
	width: "40dp",
	color: "#fff",
	backgroundColor: "#00f"
});
var view1 = Ti.UI.createView({
	top: "10dp",
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	backgroundColor: "#f00"
})
view1.add(label1);
win.add(view1);
// win.add(label1);

var label2 = Ti.UI.createLabel({
	text: "This is a test value",
	font: {fontSize: "15dp"},
	color: "#fff",
	backgroundColor: "#f00"
});

var view2 = Ti.UI.createView({
	top: "10dp",
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	backgroundColor: "#00f"
})
view2.add(label2);
win.add(view2);
// win.add(label2);

win.open();

// TODO: write your module tests here
var paint = require('com.tripvi.measuretext');
Ti.API.info("module is => " + paint);

function pxToDP(val) {
	console.log("pxToDP :: value  / " + (Ti.Platform.displayCaps.dpi / 160));
    return val / Ti.Platform.displayCaps.dpi * 160;
}

if (Ti.Platform.name == "android") {
	
	var width = require('com.tripvi.measuretext').measureTextWidth("This is a test value", 15, "dp");
	var height = require('com.tripvi.measuretext').measureTextHeight("lakdsjflkajsdlfkja;lskdjfdlkfjalskdjflkasjdlfkjlakdsjflkja", 15, "dp", 40);
	
	Ti.API.info("module width => " + width);
	Ti.API.info("module height => " + height);
	
	Ti.API.info("label_w width => " + pxToDP(label2.toImage().width));
	Ti.API.info("label_h height => " + pxToDP(label1.toImage().height));
	
	// view들의 backgroundColor가 보이지 않으면 제대로 나온 수치
	view1.height = height + "dp";
	view2.width = width + "dp";
}



















