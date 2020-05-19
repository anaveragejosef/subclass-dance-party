var changeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer color"></span>');
};

changeColorDancer.prototype = Object.create(makeDancer.prototype);
changeColorDancer.prototype.constructor = changeColorDancer;

changeColorDancer.prototype.step = function() {
  // Call the old version (makeDancer) of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  var randomR = Math.floor(Math.random() * 255);
  var randomG = Math.floor(Math.random() * 255);
  var randomB = Math.floor(Math.random() * 255);
  this.$node.css('border-color', `rgb(${randomR}, ${randomG}, ${randomB})`);
};