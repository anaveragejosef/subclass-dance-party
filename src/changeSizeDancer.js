var changeSizeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="sizeDancer" src="src/planet.gif">');
  this.setPosition.call(this, top, left);
};

changeSizeDancer.prototype = Object.create(makeDancer.prototype);
changeSizeDancer.prototype.constructor = changeSizeDancer;

changeSizeDancer.prototype.step = function() {
  // Call the old version (makeDancer) of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // Increase size smoothly using animate
  this.$node.animate({'width': '250px', 'height': '250px'}, 1500 );
  // When mouseover occurs, explode (hide) will toggle on and off
  this.$node.on('mouseover', function() {
    $( this ).toggle( 'explode' );
  });

};