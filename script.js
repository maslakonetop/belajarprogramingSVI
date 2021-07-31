function rndm_colour(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}

function change_heading() {
  color = rndm_colour();
  document.getElementById("heading").style.color = color;

}

function show_hide(){
  if (document.getElementById("appear").style.display == 'none'){
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}

function show_hide1(){
  if (document.getElementById("appear1").style.display == 'none'){
    document.getElementById("appear1").style.display = 'block';
  }else{
    document.getElementById("appear1").style.display = 'none';
  }
}

function gallery(){
  if (document.getElementById("gallery").style.display == 'none'){
    document.getElementById("gallery").style.display= 'block';
  }else{
    document.getElementById("gallery").style.display = 'none';
  }
}

function video(){
  if (document.getElementById("video").style.display == 'none'){
    document.getElementById("video").style.display= 'block';
  }else{
    document.getElementById("video").style.display = 'none';
  }
}

function killswitch(){
  document.getElementById("body").remove();
}

function say_hello(){
  var name = document.getElementById("name").value;
  document.getElementById("Welcome").innerHTML = "<h2>Welcome to my page " + name + "</h2>";
  if (name.length < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}
function validateText() {
  //store the value from the 'name' element in a 'name' variable:
  var name = document.forms.Quiz.name.value;
  //if the 'name' variable contains an empty string show an alert in the browser:
  if (fullName === "") {
    alert("Name must be filled out");
    return false;
  } else {
    return true;
  }  
}

function validateNumber() {
  var x;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;
  // If x value is equal to zero
  if (x === 0) {
    //if the 'x' variable is 0 show an alert in the browser:
    alert("You must enter a number above 0");
    return false;
  } else {
    return true;
  }
}

function validateRadio() {
  // Check a value is present for the group of radio buttons:
  var answer1 = document.forms.Quiz.elements.radio.value;
  //if there is no value present an alert will appear in the browser:
  if (answer1 === " ") {
    alert("One radio button must be selected");
    return false;
  }else{
    return true;
  }
}

function validateQuestions() {
      //if any of the validation functions return `false` indicate the data is not valid.
      if (validateText()){
        return true;
      }else{
        return false;
      }
    }
    
function checkAnswers(){
  // grab all the elements from the quiz form, store them as quiz
  quiz = document.forms.Quiz.elements;
  var score = 0
  answer1 = quiz.jawaban.value;
  answerText = quiz.answerText.value;
    
  if (validateQuestions()){
    // check the answers
    // question 1
    if (answer1 == "jawaban2"){
      score = score + 1;
    }
    if (answerText == "Climate change is a long-termchange in the average weather patterns that have come to define Earths local regional and global climates"){
        score = score + 1;
    }
  //return the score value as part of an alert in the browser
  // alert ('Well done, your score was... ' + score);
  showFeedback(score);
  }
}

function showFeedback(score){
//hide the Quiz element by setting the display attribute to "none":
  document.forms.Quiz.style.display = "none";
  //assign the body of the HTML to the body variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  body = document.getElementsByTagName("body")[0]
  if (score === 0){
    body.innerHTML = '<h1>Do better next time, your score was... ' + score + '</h1>';
} else if (score < 2){
    body.innerHTML = '<h1>Maybe you need to visit the home page again, your score was... ' + score + '</h1>';
} else {
  //replace the HTML content inside the body tag with a heading displaying the score
  body.innerHTML = '<h1>Well done, your score was... ' + score + ' <p>lets celebrate and play streaming house party</p></h1>';
  //append some HTML to the end of the HTML body tag. The div tags will create a new line and the img tag will display an image of fireworks.
  body.innerHTML += '<div><center><img src="houseparty.jpg"/></center></div>'
}
}

function change_background(){
  color = rndm_colour();
  document.getElementById("body").style.backgroundColor = color;
}

//define the "myMap" function, this will be used by the API to set parameters and populate an element with a map:
function myMap() {
//set the center and zoom options and assign them to the mapProp variable. The API requires you to have a centre and zoom level for it to work.
var mapProp= {
  center:new google.maps.LatLng(-7.652485299999999,109.04940289999999),
  zoom:10,
};

//To make a call to the API you need to create a variable which I've called "map". You pass the element that will contain the map and the properties variable.
var map = new google.maps.Map(document.getElementById("gMap"),mapProp);

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-7.652485299999999,109.04940289999999),
    map: map
});
}
