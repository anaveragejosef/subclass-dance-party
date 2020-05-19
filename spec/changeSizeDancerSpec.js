describe('changeSizeDancer', function() {

  var changeSizeDancerEx, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    changeSizeDancerEx = new changeSizeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(changeSizeDancerEx.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that calls the css function', function() {
    sinon.spy(changeSizeDancerEx.$node, 'css');
    changeSizeDancerEx.step();
    expect(changeSizeDancerEx.$node.css.called).to.be.true;
  });

  it('should have a step function that changes the border-width', function() {
    sinon.spy(changeSizeDancerEx.$node, 'css');
    // Get border-width of changeSizeDancerEx
    var oldSize = changeSizeDancerEx.$node.css('border-width');
    console.log(oldSize);
    changeSizeDancerEx.step();
    // Get border-width of changeSizeDancerEx
    var newSize = changeSizeDancerEx.$node.css('border-width');
    console.log(newSize);
    // It is possible it will return false since this is randomly generated
    expect(oldSize === newSize).to.be.false;
  });

});
