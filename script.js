function loadSecondPage(){
    window.location.href = "page-two.html";
}

function loadFirstPage(){
    window.location.href = "index.html";
}

var submitAnswer = function() {
  var radios = document.getElementsByName("choice");
  var val = "";
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val == "") {
    document.getElementById("check").innerHTML = "Select an answer!";
  } else if (val == "To organize the content of our website") {
    document.getElementById("check").innerHTML = "The answer is correct!";
  } else {
    document.getElementById("check").innerHTML = "The answer is wrong!";
  }
};

var submitAnswer1 = function() {
  var radios = document.getElementsByName("choice");
  var val = "";
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val == "") {
    document.getElementById("check1").innerHTML = "Select an answer!";
  } else if (val == "They give us additional info about a tag.") {
    document.getElementById("check1").innerHTML = "The answer is correct!";
  } else {
    document.getElementById("check1").innerHTML = "The answer is wrong!";
  }
};

var submitAnswer2 = function() {
  var radios = document.getElementsByName("choice");
  var val = "";
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val == "") {
    document.getElementById("check2").innerHTML = "Select an answer!";
  } else if (val == "Images") {
    document.getElementById("check2").innerHTML = "The answer is correct!";
  } else {
    document.getElementById("check2").innerHTML = "The answer is wrong!";
  }
};


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
