describe('changeColorDancer', function() {

  var changeColorDancerEx, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    changeColorDancerEx = new changeColorDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(changeColorDancerEx.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that calls the css function', function() {
    sinon.spy(changeColorDancerEx.$node, 'css');
    changeColorDancerEx.step();
    expect(changeColorDancerEx.$node.css.called).to.be.true;
  });

  it('should have a step function that changes the border-color', function() {
    sinon.spy(changeColorDancerEx.$node, 'css');
    // Get border-color of changeColorDancerEx
    var oldColor = changeColorDancerEx.$node.css("border-left-color");
    changeColorDancerEx.step();
    // Get border-color of changeColorDancerEx
    var newColor = changeColorDancerEx.$node.css("border-left-color");
    // It is possible it will return false since this is randomly generated
    expect(oldColor === newColor).to.be.false;
  });

});
