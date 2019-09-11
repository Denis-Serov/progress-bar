
var progressValue = 0;

function checkProgress(val) {
	if (progressValue<100 && 100-progressValue>val) {
		progressValue = progressValue + val;
		showResults(progressValue);
		} else {
		progressValue = 100;
		showResults(progressValue);
	}
	
}

function showResults(progressValue) {
	$("div#result").html(progressValue+'%');
	$("#bar").width(progressValue+'%');
	document.getElementById('bar').setAttribute('aria-valuenow', progressValue);
}


function plusOne() {
 	checkProgress(1);
  }

function plusThree() {
	checkProgress(3);
}

function plusSeven() {
	checkProgress(7);
}

function init() {
	$("#button-1").click(plusOne);
	$("#button-3").click(plusThree);
	$("#button-7").click(plusSeven);
}

$(document).ready(init);