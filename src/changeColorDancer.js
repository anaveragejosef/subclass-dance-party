var changeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="changeColorDancer" src="src/cat.gif">');
  this.setPosition.call(this, top, left);
};

changeColorDancer.prototype = Object.create(makeDancer.prototype);
changeColorDancer.prototype.constructor = changeColorDancer;

changeColorDancer.prototype.step = function() {
  // Call the old version (makeDancer) of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // Create random invert percentage by multiplying 100 by Math.random()
  var random = Math.floor(Math.random() * 100);
  // Update the invert filter with the new percentage
  this.$node.css('filter', `invert(${random}%)`);
};