$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 5000 + 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function(event) {
    // Iterate through the window.dancers array
    for (var i = 0; i < window.dancers.length; i++) {
      // On each item call lineUp
      window.dancers[i].lineUp();
    }
  });

  $('.partnerUp').on('click', function(event) {
    // if (event.target.className === 'dancer') {
    //   console.log(event.target);
    // }
    // randomly pick a dancer object in the dancer array and assign to mainDancer
    var mainDancer = window.dancers[(Math.floor(Math.random() * window.dancers.length))];
    // Find top and left value for the main dancer (event.target)
    var topOfMain = mainDancer.top;
    var leftOfMain = mainDancer.left;
    var closestObj = null;
    var shortestDistance = null;
    // Iterate over the window.array
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] !== mainDancer) {
        // Find the hypotenuse
        var topDifference = Math.abs(window.dancers[i].top - topOfMain);
        var leftDifference = Math.abs(window.dancers[i].left- leftOfMain);
        var hypotenuse = Math.sqrt(topDifference * topDifference + leftDifference * leftDifference);
        // Compare the hypotenuse to the shortestDistance
        if (closestObj === null || hypotenuse < shortestDistance){
          // Update if it meets these conditions
          closestObj = window.dancers[i];
          shortestDistance = hypotenuse;
        }
      }
    }
    // Perform some action on closestObj and mainDancer - Bigger to be visual then circle(?)
    // mainDancer.$node.css({'width': '100px', 'height': '100px'});
    // closestObj.$node.css({'width': '100px', 'height': '100px'});
    mainDancer.$node.addClass('partners');        //css('background-image', "url('src/fire.png')");
    closestObj.$node.addClass('partners');
  });

});

