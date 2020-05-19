var changeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

changeColorDancer.prototype = Object.create(makeDancer.prototype);
changeColorDancer.prototype.constructor = changeColorDancer;

changeColorDancer.prototype.step = function() {
  // Call the old version (makeDancer) of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // Create random RGB numbers by multiplying 255 by Math.random()
  var randomR = Math.floor(Math.random() * 255);
  var randomG = Math.floor(Math.random() * 255);
  var randomB = Math.floor(Math.random() * 255);
  // Update the border-color wiht our new color combination
  this.$node.css('border-color', `rgb(${randomR}, ${randomG}, ${randomB})`);
  this.$node.css({'border-width': '20px', 'border-radius': '20px'});
};