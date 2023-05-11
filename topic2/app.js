$(document).ready(function() {
  var colors = ['red', 'yellow', 'green']; // Pre-defined colors for the lights

  var table = document.getElementById("mytable");
  var lights = table.getElementsByTagName("div");

  for (var i = 0; i < lights.length; i++) {
    lights[i].style.backgroundColor = colors[i];
  }

  $('.light').click(function() {
    var color = getRandomColor(); // Get a random color
    $(this).css('background-color', color);
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
