var north = $('.north'),
    east = $('.east'),
    south = $('.south'),
    west = $('.west'),
    color = "purple",
    number = 10,
    word = "cool";

north.css("background-color", color);

if (number < 100) {
    east.text('whoah, that is a big number.');
  } else {
    east.text('just a regular number, please.');
  }

  if (word === "cool") {
    south.text('Power of DOM');
  } else {
    west.text('Power of DOM');
  }