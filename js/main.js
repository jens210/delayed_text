$(function () {
  var message = 'Hej';
  var message2 = 'Jeg hedder Jens. Jeg laver simple og elegante hjemmesider. ';
  var message3 = 'Tjek min';
  var message4 = 'portfolio.';
  var index = 0;
  var index2 = 0;
  var index3 = 0;
  var index4 = 0;
  var functionIsRunning = false;

  // display letters with a delay.
  function displayLetter() {
    //functionIsRunning is set to true and the first message gets appended to the div target.
    functionIsRunning = true;
    if (index < message.length) {
      $('#target').append(message[index++]);
    }
    // if the function still runs the second message gets appended to the div target2.
    else if (functionIsRunning = true && index2 < message2.length) {
      $('#target2').append(message2[index2++]);

    }
    // if the message has run, the var link gets apended to target4.
    else if (index3 < message3.length) {
      $('#target3').append(message3[index3++]);
    }
    else if (index4 < message4.length) {
      $('#target4').append(message4[index4++]);
      $('#target4').wrap(function () {
        var link = $('<a/>');
        link.attr('href', 'https://jensvk.dk');
        return link;
      });
  
    }
    else {
      functionIsRunning = false;
      clearInterval(repeat);
    }
  }
  var repeat = setInterval(displayLetter, 100);
});



