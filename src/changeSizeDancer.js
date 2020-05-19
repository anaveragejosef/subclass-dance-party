var changeSizeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

changeSizeDancer.prototype = Object.create(makeDancer.prototype);
changeSizeDancer.prototype.constructor = changeSizeDancer;

changeSizeDancer.prototype.step = function() {
  // Call the old version (makeDancer) of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // Update Color to be unique
  this.$node.css('background-color', 'yellow');
  // Find random size between 10 and 50 pixels
  var size = Math.floor(Math.random() * (50 - 10) + 10);
  // Update border width
  this.$node.css({'width': `${size}px`, 'height': `${size}px`});

  this.$node.on('mouseover', function() {
    $( this ).toggle( 'explode' );
  });

};