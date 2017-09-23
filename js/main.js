$(function() {
    var link = $("<a href='https://www.jensvk.dk'>Portfolio</a>");
    var message = 'Jeg hedder Jens. Jeg laver simple og elegante hjemmesider. ';
    var message2 = 'Tjek min ';
    var index = 0;
    var index2 = 0;
    var functionIsRunning = false;
    
    // display letters with a delay.
    function displayLetter() {
    //functionIsRunning is set to true and the first message gets appended to the div target.
        functionIsRunning = true;
      if (index < message.length) {
        $('#target').append(message[index++]); 
      }
    // if the function still runs the second message gets appended to the div target2.
      else if(functionIsRunning = true){
        $('#target2').append(message2[index2++])
    // if the message has run, the var link gets apended to target2.
        if(message2.length===index2){
            $('#target2').append(link);
            }
      }
      else{
        functionIsRunning = false;
        clearInterval(repeat);
      }
    }
    var repeat = setInterval(displayLetter, 100);
  });

  

  